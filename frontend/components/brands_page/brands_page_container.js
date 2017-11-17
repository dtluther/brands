import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BrandsPage from './brands_page';
import { fetchBrands, createBrand, deleteBrand } from '../../actions/brand_actions';

const mapStateToProps = state => {
    return {
        brands: state.entities.brands
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBrands: () => dispatch(fetchBrands()),
        createBrand: brand => dispatch(createBrand(brand)),
        deleteBrand: id => dispatch(deleteBrand(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BrandsPage);