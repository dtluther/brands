import React from 'react';
import { Link } from 'react-router-dom';

class BrandsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchBrands();
    }

    handleDelete(brandKey) {
        return e => {
            e.preventDefault();
            this.props.deleteBrand(brandKey);
        };
    }

    renderBrandsIndex() {
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
                                        <Link className="edit-brands-link" to={`/brands/${brandKey}/${this.props.brands[brandKey].name}`}>
                                            <i className="fa fa-edit fa-2x" aria-hidden="true"></i>
                                        </Link>
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
        return (
            <div className="brands-index-page">
                <Link className="new-brands-link" to={"/brands/new"}>
                    <button className="new-brand" >Create New Brand</button>
                </Link>
                {this.renderBrandsIndex()}
            </div>
        );
    }
}

export default BrandsPage;