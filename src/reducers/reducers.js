import {combineReducers} from 'redux';

import items from './itemsReducer';
import cart from './cartReducer';
import product from './productReducer';
import catalog from './catalogReducer';

export default combineReducers({
    items: items,
    cart: cart,
    product: product,
    catalog: catalog
});