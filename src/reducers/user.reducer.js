const initialState = {};

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case 'LOGIN_USER':
            localStorage.setItem('tokenAccess', action.payload.body.token)
            return { ...action.payload.body };
        case 'GET_USER':
            return { ...state, ...action.payload.body };
        case 'LOGOUT_USER':
            localStorage.removeItem('tokenAccess')
            return initialState;
        case 'RELOG_USER':
            let token = localStorage.getItem('tokenAccess')
            return { token, ...action.payload.body };
        case 'UPDATE_USER':
            return { ...state, ...action.payload.body };
        default:
            return state;
    }
}