import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/svg/shopping-bag.svg';

import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCart, cartItemsCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartItemsCount}</span>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItemsCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => dispatch(toggleCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);