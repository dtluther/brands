import merge from 'lodash/merge';
import {
    RECEIVE_PRODUCTS,
    RECEIVE_PRODUCT,
    REMOVE_PRODUCT,
    UPDATE_PRODUCT
} from '../actions/product_actions';

const productsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            return merge({}, oldState, action.product);
        case UPDATE_PRODUCT:
            const idToUpdate = action.id;
            newState[idToUpdate] = action.product[idToUpdate];
            return newState;
        case REMOVE_PRODUCT:
            const idToDelete = action.product.id;
            delete newState[idToDelete];
            return newState;

        default:
            return oldState;
    }
};

export default productsReducer;