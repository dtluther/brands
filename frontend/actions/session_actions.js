import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const receiveSessionErrors = sessionErrors => ({
    type: RECEIVE_SESSION_ERRORS,
    sessionErrors
});

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
});

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user)
        .then(userRes => dispatch(receiveCurrentUser(userRes)),
        err => (dispatch(receiveSessionErrors(err.responseJSON))))
);

export const login = user => dispatch => {
    return SessionAPIUtil.login(user)
        .then(userRes => dispatch(receiveCurrentUser(userRes)),
        err => (dispatch(receiveSessionErrors(err.responseJSON))));
};

export const logout = () => dispatch => (
    SessionAPIUtil.logout()
        .then(() => dispatch(receiveCurrentUser(null)))
);