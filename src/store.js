import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import combineReducers from './reducers/reducers';

export default () => {
    return createStore(combineReducers, applyMiddleware(thunk, logger));
};
