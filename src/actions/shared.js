import { getInitialData } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { handleSetAuthedUser } from './authedUser'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'


// const AUTHED_ID = [{
//     answers: {vthrdm985a262al8qx3do: "optionOne", xj352vofupe1dqz9emx13r: "optionTwo"},
//     avatarURL: "https://www.facebook.com/photo.php?fbid=2994720203909635&set=a.128392793875738&type=3&theater",
//     id: "tylermcginnis",
//     name: "Tyler McGinnis",
//     questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"]}
// ]

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ authedUser, users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(handleSetAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}
