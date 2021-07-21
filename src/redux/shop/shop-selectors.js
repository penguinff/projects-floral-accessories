import { createSelector } from 'reselect';

const selectShop = state => state.shop;

// select the collections object
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// derive an array of collections
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => 
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

// derive an array of all product items
export const selectAllProductsArray = createSelector(
  [selectCollectionsForPreview],
  previewCollections => 
    previewCollections ? 
      previewCollections.map(previewCollection => 
        previewCollection.items
      ).flat()
    : null
);

// derive an array with the last 2 items in each collection
export const selectNewArrival = createSelector(
  [selectCollectionsForPreview],
  previewCollections => 
    previewCollections ? 
      previewCollections.map(previewCollection => 
        previewCollection.items.filter((item, index) => index > previewCollection.items.length - 3)
      ).flat()
    : []
)

// select certain collection by url
export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => 
    collections ? collections[collectionUrlParam] : null
);

// select certain product by url
export const selectProduct = (collectionUrlParam, productUrlParam) => createSelector(
  [selectCollection(collectionUrlParam)],
  collection => 
    collection ? collection.items.find(item => item.id === productUrlParam) : null
);

// select isFetching
export const selectIsCollectionsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

// derive is collection loaded by the existence of collections object
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);