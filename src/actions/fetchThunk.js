import isoFetch from 'isomorphic-fetch';

import { itemsLoading, itemsError, itemsSet } from "./items";
//import { itemsLoading, itemsError, itemsSet } from "./product";

const itemsThunk = (dispatch, params) => {
    return function() {
        dispatch( itemsLoading() );
        let search = window.location.search !== undefined ? window.location.search : "",
            id = params !== undefined ? `/${params}` : "";
        isoFetch(`http://localhost:3000/shop${window.location.pathname + id + search}`)
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
                dispatch( itemsSet(data) );
            })
            .catch( (error) => {
                console.error(error);
                dispatch( itemsError() );
            })
        ;
    }

};

export {itemsThunk};
