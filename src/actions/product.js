const PRODUCT_LOADING = 'PRODUCT_LOADING',
    PRODUCT_ERROR='PRODUCT_ERROR',
    PRODUCT_SET='PRODUCT_SET';

const productLoading = () => {
        return {
            type: PRODUCT_LOADING,
        };
    },
    productError = () => {
        return {
            type: PRODUCT_ERROR,
        };
    },
    productSet = (product) => {
        return {
            type: PRODUCT_SET,
            data: product,
        };
    };

export {
    productLoading, PRODUCT_LOADING,
    productError, PRODUCT_ERROR,
    productSet, PRODUCT_SET,
};
