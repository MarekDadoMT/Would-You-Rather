import { getInitialData } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {getAuthedUser} from './authedUser'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'


export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ authedUser, users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(getAuthedUser(authedUser))
                dispatch(hideLoading())
            })
    }
}
