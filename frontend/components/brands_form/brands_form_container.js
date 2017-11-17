import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BrandsForm from './brands_form';
import { fetchBrands, createBrand, updateBrand, deleteBrand } from '../../actions/brand_actions';

const mapStateToProps = state => {
    return {
        brands: state.entities.brands
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createBrand: brand => dispatch(createBrand(brand)),
        updateBrand: (brand) => dispatch(updateBrand(brand)),
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(BrandsForm));