import { cartTypes } from './cart.types';

const INTITIAL_STATE = {
    hidden: true
}

export default (state = INTITIAL_STATE, action) => {
    switch (action.type) {
        case cartTypes.TOGGLE_CART_VISIBILITY: {
            return {
                ...state,
                hidden: !state.hidden
            }
        }

        default: return state;
    }
}