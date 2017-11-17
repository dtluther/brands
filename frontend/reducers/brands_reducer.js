import merge from 'lodash/merge';
import {
    RECEIVE_BRANDS,
    RECEIVE_BRAND,
    REMOVE_BRAND
} from '..actions/brand_actions';

const brandsreducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);

    switch(action.type) {
        case RECEIVE_BRANDS:
            return action.brands;
        case RECEIVE_BRAND:
            const newBrand = {[action.brand.id]: action.brand};
            return merge({}, oldState, newBrand);
        case REMOVE_BRAND:
            const idToDelete = action.brand.id;
            delete newState[idToDelete];
            return newState;

        default:
            return oldState;
    }
};