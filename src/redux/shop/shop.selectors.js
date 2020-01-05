import { createSelector } from 'reselect';

const selectShopData = state => state.shop;

export const selectCollections = createSelector(
    [selectShopData],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = (collectionId) => createSelector(
    [selectCollections],
    collections => collections[collectionId]
)