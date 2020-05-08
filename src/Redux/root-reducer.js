import { combineReducers } from 'redux';
import userReducer from '../Redux/User/user.reducer';
import cartReducer from '../Redux/Cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});