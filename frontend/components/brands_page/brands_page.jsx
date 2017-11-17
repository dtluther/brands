import React from 'react';
import Link from 'react-router-dom';

class BrandsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchBrands();
    }

    handleDelete(brandKey) {
        debugger;
        return e => {
            e.preventDefault();
            this.props.deleteBrand(brandKey);
        };
    }

    renderBrandsIndex() {
        console.log('props in brands render', this.props.brands);
        let brands;
        const brandKeys = Object.keys(this.props.brands);
        // debugger;
        if (brandKeys.length > 0) {
            brands = (
                <ul className="brands-index">
                    {
                        brandKeys.map((brandKey, i) => {
                            return (
                                <li className="brand-index-item" key={`brand-${i}`}>
                                    <h2>{this.props.brands[brandKey].name}</h2>
                                    <div className="brand-buttons">
                                        <i className="fa fa-edit fa-2x" aria-hidden="true"></i>
                                        <i className="fa fa-trash fa-2x" aria-hidden="true"
                                           onClick={this.handleDelete(brandKey)}></i>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            );
        }
        return brands;
    }

    render() {
        console.log('props in brands', this.props);
        
        return (
            <div className="brands-index-page">
                <Link className="new-brands-link" to="/brands/new>
                    <button className="new-brand">Create New Brand</button>
                </Link>
                {this.renderBrandsIndex()}
            </div>
        );
    }
}

export default BrandsPage;