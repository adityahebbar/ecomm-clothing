import { cartTypes } from './cart.types';
import { addItemToCart } from './cart.utils';

const INTITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export default (state = INTITIAL_STATE, action) => {
    switch (action.type) {
        case cartTypes.TOGGLE_CART_VISIBILITY: {
            return {
                ...state,
                hidden: !state.hidden
            }
        }
        case cartTypes.ADD_ITEM: {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        }

        default: return state;
    }
}