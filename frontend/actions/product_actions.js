import * as ProductAPIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
});
export const modifyProduct = product => ({
    type: UPDATE_PRODUCT,
    product
});

export const removeProduct = product => ({
    type: REMOVE_PRODUCT,
    product
});

export const receiveProductErrors = productErrors => ({
    type: RECEIVE_PRODUCT_ERRORS,
    productErrors
});

// thunk action creators
export const fetchProducts = () => dispatch => {
    return ProductAPIUtil.fetchProducts()
        .then(products => dispatch(receiveProducts(products)),
        err => dispatch(receiveProductErrors(err.responseJSON)));
};

export const fetchProduct = id => dispatch => {
    return ProductAPIUtil.fetchProduct(id)
        .then(product => dispatch(receiveProduct(product)),
        err => dispatch(receiveProductErrors(err.responseJSON)));
};

export const createProduct = product => dispatch => {
    return ProductAPIUtil.createProduct(product)
        .then(product => dispatch(receiveProduct(product)),
        err => dispatch(receiveProductErrors(err.responseJSON)));
};

export const updateProduct = (product) => dispatch => {
    return ProductAPIUtil.updateProduct(product)
        .then(product => dispatch(receiveProduct(product)),
        err => dispatch(receiveProductErrors(err.responseJSON)));
};

export const deleteProduct = id => dispatch => {
    return ProductAPIUtil.deleteProduct(id)
        .then(product => dispatch(removeProduct(product)),
        err => dispatch(receiveProductErrors(err.responseJSON)));
};
