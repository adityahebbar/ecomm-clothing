import { cartTypes } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

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

        case cartTypes.REMOVE_ITEM: {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        }

        case cartTypes.CLEAR_ITEM_FROM_CART: {
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        }

        default: return state;
    }
}