import {createSelector} from 'reselect';


const COLLECTIONS_ID = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5

};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsId = collectionsUrlId => createSelector(
    [selectShop],
    collections => collections.find(collection => collection.id === COLLECTIONS_ID[collectionsUrlId])
)