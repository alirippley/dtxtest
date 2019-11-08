import { combineReducers } from 'redux';

export function admin(state = false, action) {
  switch (action.type) {
    case "AUTH":
        if (action.payload.name === 'ally' && action.payload.password === 'ally') return true;
        break;  
    default:
      return state;
  }
}
export function user(state = false, action) {
  switch (action.type) {
    case "AUTH":
        return action.payload && action.payload.name === 'ally';
    default:
      return state;
  }
}

export default combineReducers({
    admin,
    user
});