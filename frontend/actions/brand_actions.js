import * as BrandAPIUtil from '../util/brand_api_util';

export const RECEIVE_BRAND = 'RECEIVE_BRAND';
export const RECEIVE_BRANDS = 'RECEIVE_BRANDS';
export const REMOVE_BRAND = 'REMOVE_BRAND';
export const RECEIVE_BRAND_ERRORS = 'RECEIVE_BRAND_ERRORS';

export const receiveBrands = brands => ({
    type: RECEIVE_BRANDS,
    brands
});

export const receiveBrand = brand => ({
    type: RECEIVE_BRAND,
    brand
});

export const removeBrand = brand => ({
    type: REMOVE_BRAND,
    brand
});

export const receiveBrandErrors = brandErrors => ({
    type: RECEIVE_BRAND_ERRORS,
    brandErrors
});

// thunk action creators
export const fetchBrands = () => dispatch => {
    return BrandAPIUtil.fetchBrands()
        .then(brands => dispatch(receiveBrands(brands)),
              err => dispatch(receiveBrandErrors(err.responseJSON)));
};

export const fetchBrand = id => dispatch => {
    return BrandAPIUtil.fetchBrand(id)
        .then(brand => dispatch(receiveBrand(brand)),
              err => dispatch(receiveBrandErrors(err.responseJSON)));
};

export const createBrand = brand => dispatch => {
    return BrandAPIUtil.createBrand(brand)
        .then(brand => dispatch(receiveBrand(brand)),
              err => dispatch(receiveBrandErrors(err.responseJSON)));
};

export const updateBrand = brand => dispatch => {
    return BrandAPIUtil.updateBrand(brands)
        .then(brand => dispatch(receiveBrand(brand)),
              err => dispatch(receiveBrandErrors(err.responseJSON)));
};

export const deleteBrand = id => dispatch => {
    return BrandAPIUtil.deleteBrand(id)
        .then(brand => dispatch(removeBrand(brand)),
              err => dispatch(receiveBrandErrors(err.responseJSON)));
};
