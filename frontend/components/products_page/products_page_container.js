import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ProductsPage from './products_page';
import { fetchProducts, createProduct, deleteProduct } from '../../actions/product_actions';


const mapStateToProps = state => {
    return {
        products: state.entities.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        createProduct: brand => dispatch(createProduct(brand)),
        deleteProduct: id => dispatch(deleteProduct(id))
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsPage));
