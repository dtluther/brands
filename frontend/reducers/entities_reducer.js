import { combineReducers } from 'redux';
import brandsReducer from './brands_reducer';
import productsReducer from './products_reducer';

const entitiesReducer = combineReducers({
    brands: brandsReducer,
    products: productsReducer
});

export default entitiesReducer;