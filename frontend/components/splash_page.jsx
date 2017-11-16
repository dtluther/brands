import React from 'react';
import SessionFormContainer from './session_form/session_form_container';


class SplashPage extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div className="splash">
                <SessionFormContainer />
            </div>
        )
    }
}

export default SplashPage;