import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/Collections/collections.component';
import './category.styles.scss';
import { selectCollectionsId } from '../../Redux/Shop/shop.selector';


const Category = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='category'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownprops) => (
    {
        collection: selectCollectionsId(ownprops.match.params.categoryId)(state)
    }
)

export default connect(mapStateToProps)(Category);