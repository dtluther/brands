import merge from 'lodash/merge';
import {
    RECEIVE_BRANDS,
    RECEIVE_BRAND,
    REMOVE_BRAND,
    UPDATE_BRAND
} from '../actions/brand_actions';

// const _nullBrand = {
//     selectedBrand: null,
//     allBrands: []
// };

const brandsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);

    switch(action.type) {
        case RECEIVE_BRANDS:
            return action.brands;
        case RECEIVE_BRAND:
            return merge({}, oldState, action.brand);
        case UPDATE_BRAND:
            const idToUpdate = action.id;
            newState[idToUpdate] = action.brand[idToUpdate];
            return newState;
        case REMOVE_BRAND:
            const idToDelete = action.brand.id;
            delete newState[idToDelete];
            return newState;

        default:
            return oldState;
    }
};

export default brandsReducer;