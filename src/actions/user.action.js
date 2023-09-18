import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const GET_USER = 'GET_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RELOG_USER = 'RELOG_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const FAIL_RELOG = 'FAIL_RELOG';


export const loginUser = (data) => {
    return (dispatch) => {
        return axios.post('http://localhost:3001/api/v1/user/login', data).then((res) => {
            dispatch({ type: 'LOGIN_USER', payload: res.data })
        })
    }
}

export const relogUser = (token) => {
    return (dispatch) => {

        return axios.post('http://localhost:3001/api/v1/user/profile', null, { headers: { Authorization: 'Bearer ' + token } }).then((res) => {
            dispatch({ type: 'RELOG_USER', payload: res.data })
        }).catch((err) => {
            return dispatch({ type: 'LOGOUT_USER', payload: true })
        })

    }
}


export const getUser = (token) => {
    return (dispatch) => {
        return axios.post('http://localhost:3001/api/v1/user/profile', null, { headers: { Authorization: 'Bearer ' + token } }).then((res) => {
            dispatch({ type: 'GET_USER', payload: res.data })
        })
    }
}

export const logoutUser = (token) => {
    return (dispatch) => {
        return dispatch({ type: 'LOGOUT_USER', payload: true })
    }
}


export const updateUser = (token, data) => {
    return (dispatch) => {
        return axios.put('http://localhost:3001/api/v1/user/profile', data, { headers: { Authorization: 'Bearer ' + token } }).then((res) => {
            dispatch({ type: 'UPDATE_USER', payload: res.data })
        })
    }
}