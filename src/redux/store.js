import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk, logger];

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(...middlewares))
    );

export default store;