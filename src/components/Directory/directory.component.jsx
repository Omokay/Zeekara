import React, { Component } from 'react';
import './directory.style.scss';
import MenuItem from '../MenuItem/menuItem.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../Redux/Directory/directory.selector';

const Directory = ({ sections }) => (

    <div className="directory-menu">
        {sections.map(({ id, title, imageUrl, size, linkUrl }) => <MenuItem key={id} title={title} subtitle={linkUrl} imageUrl={imageUrl} size={size} />)}
    </div>

);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);