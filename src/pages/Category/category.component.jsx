import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/CollectionItem/collection-item.component';
import './category.styles.scss';
import { selectCollection } from '../../Redux/Shop/shop.selector';

const Category = ({ collection }) => {
  console.log(collection);
  
  const { title, items } = collection;
  console.log(items);
  return (
      <div className='category'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
  </div>
  )
        };


const mapStateToProps = (state, ownProps) => ({
     collection: selectCollection(ownProps.match.params.categoryId)(state)
    });

export default connect(mapStateToProps)(Category);