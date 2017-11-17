import { combineReducers } from 'redux';
import brandsReducer from './brands_reducer';

const entitiesReducer = combineReducers({
    brands: brandsReducer
    // products: productsReducer
});

export default entitiesReducer;