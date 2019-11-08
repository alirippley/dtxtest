import { combineReducers } from 'redux';
import authenticate from './authenticate';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  authenticate,
});

export default rootReducer;
