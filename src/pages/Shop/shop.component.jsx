import React from 'react'; 
import { selectCollections } from '../../Redux/Shop/shop.selector';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Collections from '../../components/Collections/collections.component';

const Shop = ({ collections }) => (
    <div className='shop-page'>
        {collections.map(({ id, ...otherCollections }) => (
            <Collections key={id} {...otherCollections} />
        ))}
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(Shop);