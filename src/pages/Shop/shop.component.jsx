import React from 'react'; 
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/collections-overview.component';
import Category from '../Category/category.component';

const Shop = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
        <Route path={`${match.path}/:categoryId`} component={Category}/>
    </div>
);


export default Shop;