import { combineReducers } from 'redux';
import { userReducer } from './recuders/userReducer';
import { cartReducer } from './recuders/cartReducer';

const rootReducer = combineReducers({
  
  user: userReducer,
  cart: cartReducer

  
});

export default rootReducer;
