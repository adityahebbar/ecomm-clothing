import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

class Directory extends React.Component {
    renderSections = () => {
        return this.props.sections.map(({ title, size, id, imageUrl }) => {
            return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        });
    }

    render() {
        return (
            <div className="directory-menu">
                {this.renderSections()}
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);