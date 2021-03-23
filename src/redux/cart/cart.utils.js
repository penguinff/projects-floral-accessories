export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    );
  }
  return [{...cartItemToAdd, quantity: 1}, ...cartItems];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  };
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
  );
};

export const mergeCurrentAndStoredCart = (cartItems, storedCart) => {
  let newItems = [];
  storedCart.forEach(storedCartItem => {
    let sameId = element => element.id === storedCartItem.id;
    let id = cartItems.findIndex(sameId);
    if (id === -1) {
      newItems.push(storedCartItem);
    }
  })
  return [...cartItems, ...newItems];
}