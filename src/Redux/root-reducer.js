import { combineReducers } from 'redux';
import userReducer from '../Redux/User/user.reducer';

export default combineReducers({
    user: userReducer
});