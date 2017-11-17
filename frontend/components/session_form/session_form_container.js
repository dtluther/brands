import { connect } from 'react-redux';
import { login, signup, clearSessionErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import SessionForm from './session_form';

const mapStateToProps = state => {
    return {
        loggedIn: Boolean(state.session.currentUser),
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    // if (ownProps) console.log(ownProps);
    // const formType = ownProps.location.pathname.slice(1)
    // const processForm = (formType === 'login') ? login : signup;
    // return {
    //     processForm: user => dispatch(processForm(user)),
    //     formType
    // }
    
    return {
        signup: user => dispatch(signup(user)),
        login: user => dispatch(login(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())

    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm));