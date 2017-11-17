import React from 'react';

class BrandsForm extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.match.params.brand_name) {
            this.state = {
                id: this.props.match.params.brand_id,
                name: this.props.match.params.brand_name
            };
            this.formType = "edit";
        } else {
            this.state = { name: "" };
            this.formType = "new";
        }    
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
                this.props.updateBrand(this.state);
            } else {
                this.props.createBrand({brand: this.state});
            }

            this.props.history.push('/brands');
        };
    }

    render() {
        console.log(this.props);
        const instruction = this.formType === "edit" ?
            <h2 className="edit-header">Edit Brand Name Below</h2> :
            <h2 className="edit-header">Enter New Brand Below</h2>;

        const submitText = this.formType === "edit" ? "Update Brand" : "Create Brand";

        return (
            <div className="brand-form-page">
                {instruction}
                <input className="new-brand-input"
                    type="text"
                    value={this.state.name}
                    placeholder="Enter Brand Name"
                    onChange={this.update('name')}
                    />
                <button className="create-brand"
                    onClick={this.handleSubmit()}
                    >{submitText}</button>
            </div>
        );
    }
}

export default BrandsForm;