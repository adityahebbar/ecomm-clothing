import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const Collection = ({ collection }) => {
    return (
        <div className="collection">
            Collection Page
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps)(Collection)