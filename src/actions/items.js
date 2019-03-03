const ITEMS_LOADING = 'ITEMS_LOADING',
    ITEMS_ERROR='ITEMS_ERROR',
    ITEMS_SET='ITEMS_SET';

const itemsLoading = () => {
        return {
            type: ITEMS_LOADING,
        };
    },
    itemsError = () => {
        return {
            type: ITEMS_ERROR,
        };
    },
    itemsSet = (items) => {
        return {
            type: ITEMS_SET,
            data: items,
        };
    };

export {
    itemsLoading, ITEMS_LOADING,
    itemsError, ITEMS_ERROR,
    itemsSet, ITEMS_SET,
};
