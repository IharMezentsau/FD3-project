import {SET_CATALOG} from '../actions/catalog';

const initialState = {
    data: null,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CATALOG: {
            let newState = {
                data: action.data,
            };
            return newState;
        }

        default:
            return state;
    }
};
