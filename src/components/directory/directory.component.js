import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import sections from '../../data/sections.data';

import './directory.styles.scss';

class Directory extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sections: sections
        }
    }

    renderSections = () => {
        return this.state.sections.map(({ title, size, id, imageUrl }) => {
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

export default Directory;