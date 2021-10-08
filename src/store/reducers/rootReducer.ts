import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import commonsReducer from './commons.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  commons: commonsReducer,
});

export default rootReducer;