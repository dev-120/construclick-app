import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import commonsReducer from './commons.reducer';
import shoppingCartReducer from "./shoppingCart.reducer";
import calculatorReducer from "./calculator.reducer";
import postsReducer from "./post.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  commons: commonsReducer,
  shoppingCart: shoppingCartReducer,
  calculator: calculatorReducer,
  posts: postsReducer,
});

export default rootReducer;