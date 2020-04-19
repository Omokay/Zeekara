import React, { Component } from 'react';
import SHOP_DATA from './shop_data';
import Collections from '../../components/Collections/collections.component'


class Shop extends Component {
constructor(props) {
    super(props);

    this.state = {
        collections: SHOP_DATA
    };
}

render() {
    const { collections } = this.state;
    return (
        <div className='shop-page'>
            { collections.map(({id, ...otherCollections}) => (
                <Collections key={id} {...otherCollections}/>
            ))}
        </div>
    ) 
}
}

export default Shop;