const SET_CATALOG = 'SET_CATALOG';

const catalogSet = (catalog) => {
        return {
            type: SET_CATALOG,
            data: catalog,
        };
    };

export {SET_CATALOG, catalogSet};
