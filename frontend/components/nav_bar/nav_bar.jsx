import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    handleLogout() {
        return e => {
            e.preventDefault();
            this.props.logout()
                .then(() => this.props.history.push("/"));
        };
    }
    sessionButtons() {
        if (this.props.loggedIn) {
            return (
                <div className="buttons">
                    <div className="brands-products-links">
                        <Link className="brands-link" to={"/brands"}>
                            <button className="session-button brands-button">Brands</button>
                        </Link>
                        <Link className="products-link" to={"/products"}>
                            <button className="session-button products-button">Products</button>
                        </Link>
                    </div>

                    <button className="session-button logout"
                        onClick={this.handleLogout()}>Log Out</button>
                </div>
            );
        } else {
            return (
                <div className="buttons">
                    <div className="empty-buttons"></div>

                    <div className="session-links">
                        <Link className="session-link" to={"/"}>
                            <h2 className="signup">Sign Up</h2>
                        </Link>
                        <Link className="session-link" to={"/login"}>
                            <h2 className="login">Log In</h2>
                        </Link>
                    </div>
                </div>
            );
        }

    }
    render() {
        return (
            <div className="nav">
                {this.sessionButtons()}
            </div>
        );
    }
}

export default NavBar;