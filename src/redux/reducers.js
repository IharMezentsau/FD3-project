import { combineReducers } from 'redux';

import switchMenuLeftOpenReducer from './switchMenuLeftOpenReducer';

let combinedReducer = combineReducers({
    menuLeftOpen: switchMenuLeftOpenReducer,
});

export default combinedReducer;