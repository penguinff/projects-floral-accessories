export const toggleItemtoWishlist = (wishlistItems, wishlistItemToToggle) => {
  const existingWishlistItem = wishlistItems.find(
    wishlistItem => wishlistItem.id === wishlistItemToToggle.id
  );
  if (existingWishlistItem) {
    return wishlistItems.filter(wishlistItem => wishlistItem.id !== wishlistItemToToggle.id)
  };
  return [wishlistItemToToggle, ...wishlistItems];
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