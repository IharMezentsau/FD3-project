const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
    REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_TO_CART";

const addItemToCart = items => ({
    type: ADD_ITEM_TO_CART,
    payload: items
});

const removeItemToCart = items => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: items
});

export {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, addItemToCart, removeItemToCart};