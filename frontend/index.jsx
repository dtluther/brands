// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Root from './components/root';
import configureStore from './store/store';

// Actions
import { fetchBrands, fetchBrand, createBrand, deleteBrand } from './actions/brand_actions';
window.brands = fetchBrands;
window.brand = fetchBrand;
window.create = createBrand;
window.delete = deleteBrand;
// TESTING START
// TESTING END

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser } };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING END

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});