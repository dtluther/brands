import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
    return {
        loggedIn: Boolean(state.session.currentUser),
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    // const formType = ownProps.location.pathname.slice(1)
    // const processForm = (formType === 'login') ? login : signup;
    // return {
    //     processForm: user => dispatch(processForm(user)),
    //     formType
    // }
    
    return {
        signup: user => dispatch(login(user)),
        login: user => dispatch(login(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);