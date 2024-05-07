import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCCBKlJDpkKwSx50JQ8uJhw1f_xzvTHTXY",
  authDomain: "floral-accessories.firebaseapp.com",
  projectId: "floral-accessories",
  storageBucket: "floral-accessories.appspot.com",
  messagingSenderId: "11303418116",
  appId: "1:11303418116:web:8acb7ed0b09cc2ad65b851",
  measurementId: "G-7QF46G3Y3C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();
// Checking if dev is true. If yes, use Firebase emulator
if (process.env.NODE_ENV !== 'production') functions.useEmulator("localhost", 5001);

// ----- functions related to users ----- //
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`); // always get back doc ref even not exist
  const snapShot = await userRef.get(); // snapshot can tell us if the doc really exist
  // if this user not exist, create new user in firestore
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        storedCart: [],
        storedWishlist: [],
        orders: [],
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  // return the userRef of the newly created user / existing user
  return userRef;
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  });
};

// For Google Signin
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// For Facebook Signin
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: 'select_account' });

// ----- functions related to collections ----- //
export const convertCollectionsSnapshotToMap = (collections) => {
  // transform collections into an array
  const transformedCollections = collections.docs.map(doc => {
    const { title, items, banner } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
      banner
    };
  });
  // convert the transformed collections array into an object
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// ----- functions related to user orders ----- //
const generateOrderNumber = () => {
  const now = new Date();
  const year = now.getUTCFullYear().toString().substring(2);
  const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = now.getUTCDate().toString().padStart(2, '0');
  const hour = now.getUTCHours().toString().padStart(2, '0');
  const minute = now.getUTCMinutes().toString().padStart(2, '0');
  const second = now.getUTCSeconds().toString().padStart(2, '0');

  const datePart = year + month + day + hour + minute + second;
  const randomPart = Math.floor(100000 + Math.random() * 900000);

  const orderRefNumStr = datePart + randomPart.toString();
  const orderRefNum = parseInt(orderRefNumStr, 10);

  return orderRefNum;
}

export const createOrder = async (currentUser, cartItems, shippingInfo, price) => {
  const currentUserId = currentUser ? currentUser.id : 'visitor';
  const userRef = firestore.doc(`users/${currentUserId}`);
  const ordersRef = firestore.doc('orders/users-orders');
  const createdAt = new Date();
  const orderRefNum = generateOrderNumber();
  const orderDetails = {
    time: createdAt,
    items: cartItems,
    shippingInfo,
    orderRefNum,
    total: price
  }
  try {
    if (currentUser) {
      await userRef.set({
        orders: {
          [orderRefNum]: orderDetails
        }
      }, {merge: true});
    }
    await ordersRef.update({
      [orderRefNum]: {
        userId: currentUserId,
        ...orderDetails
      }
    });
  } catch(error) {
    console.log('error creating order', error);
  };
};

// ----- functions related to user cart & wishlist----- //
export const storeUserCartAndWishlist = async (currentUser, cartItems, wishlistItems) => {
  if (!currentUser) return;
  const currentUserId = currentUser.id;
  const userRef = firestore.doc(`users/${currentUserId}`);
  try {
    await userRef.update({
      storedCart: cartItems,
      storedWishlist: wishlistItems
    });
  } catch(error) {
    console.log('error saving user cart and wishlist', error);
  };
};

// ----- functions related to Stripe ----- //
// for stripe-checkout-element
export const createPaymentIntent = functions.httpsCallable('createPaymentIntent');

export default firebase;