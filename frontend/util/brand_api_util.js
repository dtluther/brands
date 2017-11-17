export const fetchBrands = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/brands'
    });
};

export const fetchBrand = id => {
    return $.ajax({
        method: 'GET',
        url: `api/brands/${id}`
    });
};

export const createBrand = brand => {
    return $.ajax({
        method: 'POST',
        url: 'api/brands',
        data: brand
    });
};

export const updateBrand = brand => {
    return $.ajax({
        method: 'PATCH',
        url: `api/brands/${brand.id}`,
        data: { brand }
    });
};

export const deleteBrand = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/brands/${id}`
    })
);