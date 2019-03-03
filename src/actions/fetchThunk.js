import isoFetch from 'isomorphic-fetch';

import { itemsLoading, itemsError, itemsSet } from "./items";

const itemsThunk = (dispatch, query) => {
    return function() {
        console.log(query);
        dispatch( itemsLoading() );//`http://localhost:3000/shop/${query}`
        isoFetch(`http://localhost:3000/shop${query}`)
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
                console.log(data);
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
