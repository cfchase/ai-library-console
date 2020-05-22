import { combineReducers } from 'redux';
import { reducer as appReducer } from '../App';
import { reducer as appListReducer } from '../main/AppList';

const rootReducer = combineReducers({
  appReducer,
  appListReducer
});

export default rootReducer;
