import { createSelector } from 'reselect';

const selectCart = (state) => state.cart

// can replace selector in cartDropdown componenet
export const selectCartItems = createSelector([selectCart],
    cart => cart.cartItems);


export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartItemCount = createSelector([selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulator, cartItem) =>
                accumulator + cartItem.quantity, 0)
);