import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Collections from '../Collections/collections.component';
import { selectCollections } from '../../Redux/Shop/shop.selector';
import './collections-overview.styles.scss';


const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {collections.map(({ id, ...otherCollections }) => (
                <Collections key={id} {...otherCollections} />
            ))}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);