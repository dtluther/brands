import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ProductsForm from './products_form';
import { createProduct, updateProduct, deleteProduct } from '../../actions/product_actions';
import { fetchBrands } from '../../actions/brand_actions';

const mapStateToProps = state => {
    return {
        products: state.entities.products,
        brands: state.entities.brands
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createProduct: product => dispatch(createProduct(product)),
        updateProduct: (product) => dispatch(updateProduct(product)),
        fetchBrands: () => dispatch(fetchBrands())
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsForm));