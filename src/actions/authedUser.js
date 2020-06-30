import {showLoading, hideLoading} from 'react-redux-loading'


export const GET_AUTHED_USER = 'GET_AUTHED_USER'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function getAuthedUser(id) {
    return {
        type: GET_AUTHED_USER,
        id,
    }
}

function setAuthedUser(authedUser) {
    return {
        type: SET_AUTHED_USER,
        authedUser,
    }
}

export function handleSetAuthedUser(user) {
    return (dispatch) => {
        dispatch(showLoading())
        dispatch(setAuthedUser(user))
        dispatch(hideLoading())
    }

}
