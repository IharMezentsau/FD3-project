import isoFetch from 'isomorphic-fetch';

import { itemsLoading, itemsError, itemsSet } from "./items";
import { productLoading, productError, productSet } from "./product";

const itemsThunk = (dispatch, params) => {
    return function() {
        let search = window.location.search !== "" ? `${window.location.search}` : "",
            type = params.type !== undefined ? `/${params.type}` : "",
            id = params.id !== undefined ? `/${params.id}` : "";

        dispatch( id !== undefined ? productLoading() : itemsLoading() );
        isoFetch(`http://localhost:3000/shop${type + id + search}`)
            .then( (response) => { // response - HTTP-ответ
                if (!response.ok) {
                    let Err = new Error("fetch error " + response.status);
                    Err.userMessage = "Ошибка связи";
                    throw Err;
                }
                else
                    return response.json();
            })
            .then( (data) => {
                dispatch( id !== "" ? productSet(data) : itemsSet(data) );
            })
            .catch( (error) => {
                console.error(error);
                dispatch( id !== "" ? productError(data) : itemsError(data) );
            })
        ;
    }

};

export {itemsThunk};
