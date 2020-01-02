import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleAuth, inverted, ...otherProps }) => {
    return (
        <button
            className={`${inverted ? 'inverted' : ''} ${isGoogleAuth ? 'google-auth-button' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;