import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };

    }

    componentWillReceiveProps(newProps) {
        if (newProps.location.pathname !== this.props.location.pathname) {
            this.props.clearSessionErrors();
            this.setState({ username: "", password: "" });
        }
    }

    handleDemoLogin() {
        return e => {
            e.preventDefault();
            this.setState({ username: "", password: "" });
            const demoUsername = Array.from("Guest");
            const demoPassword = Array.from("password");

            let loginDemoInterval = () => {
                const intervalId = setInterval(() => {
                    let currentUsername = this.state.username;
                    let currentPassword = this.state.password;

                    if (demoUsername.length > 0) {
                        currentUsername += demoUsername.shift();
                        this.setState({ username: currentUsername });
                    } else if (demoPassword.length > 0) {
                        currentPassword += demoPassword.shift();
                        this.setState({ password: currentPassword });
                    } else {
                        clearInterval(intervalId);
                        this.props.login({ user: this.state })
                            .then(() => this.props.history.push("/brands"));
                    }
                }, 100);
            };
            loginDemoInterval();
        };
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
            const processForm = this.props.location.pathname === "/" ? this.props.signup : this.props.login;
            processForm({user: this.state})
                .then(() => {
                    this.props.history.push(`/brands`);
                });

        };
    }

    renderErrors() {
        console.log('errors', this.props.errors);
        return(
            <ul className="session-errors">
                {
                    this.props.errors.map( (error, i) => {
                        return (
                            <li key={`error-${i}`}>
                                {error}
                            </li>
                        )
                    })
                }
            </ul>
        );
    }

    render() {
        console.log('session form props', this.props);
        let signInHeader, submitText;
        if (this.props.location.pathname === "/") {
            signInHeader = "Sign Up Below!";
            submitText = "Create Account";
        } else {
            signInHeader = "Log In Below!";
            submitText = "Log In";
        }

        return (
            <div className="session">
                <div>
                    <h1>{signInHeader}</h1>
                </div>
                <form className="session-form" onSubmit={this.handleSubmit()}>
                    <button className="demo-login" onClick={this.handleDemoLogin()}>Demo Login</button>
                    <p className="or">----------- OR ------------</p>
                    {this.renderErrors()}
                    <input className="session-input username"
                        type="text"
                        value={this.state.username} 
                        placeholder="Username"
                        onChange={this.update('username')}
                    />
                    <input className="session-input password"
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.update('password')}
                    />
                    <input className="session-submit"
                        type="submit"
                        value={submitText}
                    />
                </form>
            </div>
        );
    }
}

export default SessionForm;