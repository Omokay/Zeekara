import React from 'react';
import { connect } from 'react-redux';
import Collections from '../../components/Collections/collections.component';
import './category.styles.scss';
import { selectCollectionsId } from '../../Redux/Shop/shop.selector';


const Category = ({ collection }) => {
    console.log("helloe");
    return (
        <div className='category'>
            <h2>Category</h2>
        </div>
    )
};

const mapStateToProps = (state, ownprops) => (
    {
        collection: selectCollectionsId(ownprops.match.params.categoryId)(state)
    }
)

export default connect(mapStateToProps)(Category);