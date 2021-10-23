import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import commonsReducer from './commons.reducer';
import shoppingCartReducer from "./shoppingCart.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  commons: commonsReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;