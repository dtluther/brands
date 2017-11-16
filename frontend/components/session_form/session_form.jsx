import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
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
            this.props.signup({user: this.state})
                .then(() => {
                    this.props.history.push(`/brands`);
                });

        };
    }

    renderErrors() {
        return(
            <ul>
                {
                    this.props.errors.map((error, i) => {
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    })
                }
            </ul>
        );
    }

    render() {
        const signIn = "Sign Up Below!"
        return (
            <div className="session">
                <div>
                    <h1>{signIn}</h1>
                </div>
                <form className="session-form" onSubmit={this.handleSubmit()}>
                    <button className="demo-login">Demo Login</button>
                    <p className="or">----------- OR ------------</p>
                    <input className="session-input username"
                        type="text" 
                        placeholder="Username"
                        onChange={this.update('username')}
                    />
                    <input className="session-input password"
                        type="text"
                        placeholder="Password"
                        onChange={this.update('password')}
                    />
                    <input className="session-submit"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        );
    }
}

export default SessionForm;