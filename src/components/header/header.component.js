import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/svg/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

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

const mapStateToProps = createStructuredSelector({
    signedInUser: selectCurrentUser,
    cartDropdownHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);