import React from 'react';

class ProductsForm extends React.Component {
    constructor(props) {
        super(props);

        this.brands = [];
        if (this.props.match.params.product_name) {
            this.state = {
                id: this.props.match.params.product_id,
                name: this.props.match.params.product_name
            };
            this.formType = "edit";
        } else {
            this.state = { name: "" };
            this.formType = "new";
        }
    }

    componentWillMount() {
        this.props.fetchBrands()
            .then(resp => {
                console.log('JDKSAJFKDSFJKLFJS', Object.values(resp.brands));
                this.brands = Object.values(resp.brands);
            });
    }

    update(field) {
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit() {
        return e => {
            e.preventDefault();
            if (this.formType === "edit") {
                this.props.updateProduct(this.state);
            } else {
                this.props.createProduct({ product: this.state });
            }

            this.props.history.push('/products');
        };
    }

    render() {
        console.log('brands', this.brands);
        const instruction = this.formType === "edit" ?
            <h2 className="edit-header">Edit Product Name Below</h2> :
            <h2 className="edit-header">Enter New Product Below</h2>;

        const submitText = this.formType === "edit" ? "Update Product" : "Create Product";

        return (
            <div className="product-form-page">
                {instruction}
                <form className="product-form" onSubmit={this.handleSubmit()}>
                    <input className="new-product-input"
                        type="text"
                        value={this.state.name}
                        placeholder="Enter Product Name"
                        onChange={this.update('name')}
                    />
                    <textarea className="desc-input" cols="25" rows="6"></textarea>
                    <select name="" id="">
                        
                    </select>
                    <input className="price-input"type="number"/>
                    <input className="create-product"
                        type="submit"
                        value={submitText}/>
                </form>
            </div>
        );
    }
}

export default ProductsForm;