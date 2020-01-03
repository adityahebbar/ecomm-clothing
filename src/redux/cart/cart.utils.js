export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => {
            if (cartItem.id === itemToAdd.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 }
            }

            return cartItem;
        })
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => {
        if (cartItem.id === cartItemToRemove.id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
        }

        return cartItem;
    })
}