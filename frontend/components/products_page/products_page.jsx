import React from 'react';
import { Link } from 'react-router-dom';

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchProducts();
    }

    handleDelete(productKey) {
        return e => {
            e.preventDefault();
            this.props.deleteProduct(productKey);
        };
    }

    renderProductsIndex() {
        let products;
        const productKeys = Object.keys(this.props.products);
        if (productKeys.length > 0) {
            products = (
                <ul className="products-index">
                    {
                        productKeys.map((productKey, i) => {
                            let product = this.props.products[productKey];
                            return (
                                <li className="product-index-item" key={`product-${i}`}>
                                    <h2 className="name">{product.name}</h2>
                                    <p className="description">{product.description}</p>
                                    <div>
                                        <h2 className="brand">Brand: {product.brand["name"]}</h2>
                                        <h2 className="price">Price: ${product.price}</h2>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            );
        }
        return products;
    }

    render() {
        return (
            <div className="products-index-page">
                <Link className="new-products-link" to={"/products/new"}>
                    <button className="new-product" >Create New Product</button>
                </Link>
                {this.renderProductsIndex()}
            </div>
        );
    }
}

export default ProductsPage;