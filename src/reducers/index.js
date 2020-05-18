import { combineReducers } from 'redux';
import cartReducer from './cart';
import loggedReducer from './isLogged';
import shopCollectionReducer from './shopcollection';

const rootReducer = combineReducers({
  cart: cartReducer,
  logged: loggedReducer,
  collection: shopCollectionReducer,
});
export default rootReducer;
