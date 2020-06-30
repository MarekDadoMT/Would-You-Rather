import { getInitialData } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { getAuthedUser } from './authedUser'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'


// const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ authedUser, users, questions }) => {
                dispatch(getAuthedUser(authedUser))
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}
