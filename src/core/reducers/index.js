import { combineReducers } from 'redux';
import { uiReducer }       from './reducer-ui';
import { userReducer }     from './reducer-user';

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer
});

export default rootReducer;
