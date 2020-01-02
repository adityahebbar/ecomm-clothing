import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item: { imageUrl, name, price, quantity } }) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button">&times;</div>
        </div>
    );
}

export default CheckoutItem;