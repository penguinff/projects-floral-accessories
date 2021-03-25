export const addItemtoWishlist = (wishlistItems, wishlistItemToAdd) => {
  const existingWishlistItem = wishlistItems.find(
    wishlistItem => wishlistItem.id === wishlistItemToAdd.id
  );
  if (existingWishlistItem) {
    return wishlistItems.filter(wishlistItem => wishlistItem.id !== wishlistItemToAdd.id)
  };
  return [wishlistItemToAdd, ...wishlistItems];
}

export const mergeCurrentAndStoredWishlist = (wishlistItems, storedWishlist) => {
  let newItems = [];
  storedWishlist.forEach(storedWishlistItem => {
    let sameId = element => element.id === storedWishlistItem.id;
    let id = wishlistItems.findIndex(sameId);
    if (id === -1) {
      newItems.push(storedWishlistItem);
    }
  })
  return [...wishlistItems, ...newItems];
}