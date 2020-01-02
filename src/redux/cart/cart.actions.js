import { cartTypes } from './cart.types';

export const toggleCart = () => ({
    type: cartTypes.TOGGLE_CART_VISIBILITY
})

export const addItemToCart = item => {
    return {
        type: cartTypes.ADD_ITEM,
        payload: item
    }
}