import {showLoading, hideLoading} from 'react-redux-loading-bar'

export const GET_AUTHED_USER = 'GET_AUTHED_USER'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function getAuthedUser(id) {
    return {
        type: GET_AUTHED_USER,
        id
    }
}

function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}

export function handleSetAuthedUser(id) {
    return (dispatch) => {
        dispatch(showLoading())
        dispatch(setAuthedUser(id))
        dispatch(hideLoading())
    }

}

