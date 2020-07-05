import { _saveQuestionAnswer} from '../utils/_DATA'
import { saveAnswerToUser } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER_TO_QUESTIONS = 'SAVE_ANSWER_TO_QUESTIONS'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function saveAnswerToQuestions({id, authedUser, answer}) {
    return {
        type: SAVE_ANSWER_TO_QUESTIONS,
        id,
        authedUser,
        answer
    }
}

export function handleSaveAnswer (info) {
    const { authedUser, id, answer} = info

    return (dispatch) => {

        return _saveQuestionAnswer({authedUser, qid: id, answer})
            .then(dispatch(saveAnswerToQuestions(info)))
            .then(dispatch(saveAnswerToUser(info)))
            .catch(() => {
                alert('There was an error in voting the poll. Try again.')
            })
    }
}
