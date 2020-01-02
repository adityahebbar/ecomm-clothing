import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/svg/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ signedInUser, cartDropdownHidden }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/contact" className="option">CONTACT</Link>
                {
                    signedInUser ?
                        <div className="option" onClick={() => { auth.signOut() }}>SIGN OUT</div> :
                        <Link to="/signIn" className="option">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {!cartDropdownHidden ? <CartDropdown /> : null}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        signedInUser: state.user.currentUser,
        cartDropdownHidden: state.cart.hidden
    }
}

export default connect(mapStateToProps)(Header);