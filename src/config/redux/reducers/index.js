import { combineReducers } from 'redux';
import cartReducer from './cart';
import loggedReducer from './isLogged';
import shopCollectionReducer from './shopcollection';
import visitedShop from './visitedShop';
import visitedMainPage from './visitedMainPage';

const rootReducer = combineReducers({
  cart: cartReducer,
  logged: loggedReducer,
  collection: shopCollectionReducer,
  visitedShop,
  visitedMainPage,
});
export default rootReducer;
