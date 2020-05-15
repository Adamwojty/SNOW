import cartReducer from './cart';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart: cartReducer,
  logged: loggedReducer,
});
export default rootReducer;
