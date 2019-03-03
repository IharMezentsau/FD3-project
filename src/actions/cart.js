const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
    REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_TO_CART";

const addItemToCart = item => ({
    type: ADD_ITEM_TO_CART,
    payload: books
});

export {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, addItemToCart};