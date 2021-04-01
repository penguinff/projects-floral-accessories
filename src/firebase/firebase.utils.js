import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyAuNGF50NlpDpUh6iDalQoeMP2sYxYoYdo",
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

// ----- functions related to users ----- //
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
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

// Google Signin
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// Facebook Signin
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

// ----- functions related to collections ----- //
export const convertCollectionsSnapshotToMap = (collections) => {
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
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// ----- functions related to user orders ----- //
export const createOrder = async (currentUser, cartItems, shippingInfo, orderRefNum, price) => {
  const currentUserId = currentUser.id;
  const userRef = firestore.doc(`users/${currentUserId}`);
  const ordersRef = firestore.doc('orders/users-orders');
  const createdAt = new Date();
  const orderDetails = {
    time: createdAt,
    items: cartItems,
    shippingInfo,
    orderRefNum,
    total: price
  }
  try {
    await userRef.set({
      orders: {
        [orderRefNum]: orderDetails
      }
    }, {merge: true});
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
export const createStripeCheckout = functions.httpsCallable('createStripeCheckout');

export default firebase;