import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, match }) => {
    return (
        <div style={{ backgroundImage: `url(${imageUrl})` }} className={`${size} menu-item`}>
            <div className="content" onClick={() => history.push(`${match.path}shop/${title}`)}>
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Buy Now</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);