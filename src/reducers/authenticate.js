import { combineReducers } from 'redux';

export function admin(state = false, action) {
  switch (action.type) {
    case "AUTH":
        if (action.payload.name === 'ally' && action.payload.password === 'ally') return true;
    default:
      return state;
  }
}

export default combineReducers({
    admin
  //   fuelSavings,
  });