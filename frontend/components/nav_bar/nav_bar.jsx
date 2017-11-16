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
                    <div>
                        <Link className="brands-link" to={home}>
                            <button className="brands-button">Brands</button>
                        </Link>
                        <Link className="products-link" to={home}>
                            <button className="products-button">Products</button>
                        </Link>
                    </div>

                    <button className="session-button logout"
                        onClick={this.handleLogout()}>Log Out</button>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="empty-buttons"></div>

                    <div className="session-links">
                        <a className="session-link signup">Sign Up</a>
                        <a className="session-link login">Log In</a>
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