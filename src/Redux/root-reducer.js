import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from '../Redux/User/user.reducer';
import cartReducer from '../Redux/Cart/cart.reducer';
import directoryReducer from '../Redux/Directory/directory.reducer';



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};


const mainReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
});



export default persistReducer(persistConfig, mainReducer);