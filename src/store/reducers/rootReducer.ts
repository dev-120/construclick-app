import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import commonsReducer from './commons.reducer';
import shoppingCartReducer from "./shoppingCart.reducer";
import calculatorReducer from "./calculator.reducer";
import postsReducer from "./post.reducer";
import constructionReducer from './constructions.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  commons: commonsReducer,
  calculator: calculatorReducer,
  shoppingCart: shoppingCartReducer,
  constructions: constructionReducer,
});

export default rootReducer;