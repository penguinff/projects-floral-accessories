import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => 
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectNewArrival = createSelector(
  [selectCollectionsForPreview],
  previewCollections => 
    previewCollections ? 
      previewCollections.map(previewCollection => 
        previewCollection.items.filter((item, index) => index > previewCollection.items.length - 3)
      ).flat()
    : null
)

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => 
    collections ? collections[collectionUrlParam] : null
);

export const selectProduct = (collectionUrlParam, productUrlParam) => createSelector(
  [selectCollection(collectionUrlParam)],
  collection => 
    collection ? collection.items.find(item => item.id === productUrlParam) : null
);

export const selectIsCollectionsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);