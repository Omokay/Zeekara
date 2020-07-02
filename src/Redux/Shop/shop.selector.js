import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);


// export const selectCollection = collectionsUrlId => createSelector(
//     [selectCollections],
//     collections => 
//     collections.find(collection => 
//         collection.id === COLLECTIONS_ID[collectionsUrlId])
// );

export const selectCollection = collectionsUrlId => createSelector(
    [selectCollections],
    collections =>
        collections[collectionsUrlId]
);