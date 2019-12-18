import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleAuth, ...otherProps }) => {
    return (
        <button className={`${isGoogleAuth ? 'google-auth-button' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;