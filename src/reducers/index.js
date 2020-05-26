import { combineReducers } from 'redux';
import cartReducer from './cart';
import loggedReducer from './isLogged';
import shopCollectionReducer from './shopcollection';
import visitedShop from './visitedShop';

const rootReducer = combineReducers({
  cart: cartReducer,
  logged: loggedReducer,
  collection: shopCollectionReducer,
  visitedShop,
});
export default rootReducer;
