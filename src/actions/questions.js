import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import {addQuestionToUser, saveAnswerToUser} from './users'
import {showLoading, hideLoading} from 'react-redux-loading-bar'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER_TO_QUESTIONS = 'SAVE_ANSWER_TO_QUESTIONS'
export const ADD_QUESTION_TO_QUESTIONS = 'ADD_QUESTION_TO_QUESTIONS'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestionToQuestions (question) {
    return {
        type: ADD_QUESTION_TO_QUESTIONS,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())

        return _saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText
        })
            .then((question) => dispatch(addQuestionToQuestions(question)) && dispatch(addQuestionToUser(question)))
            .then(() => dispatch(hideLoading()))
            .catch(() => {
                alert('There was an error in saving question. Try again.')
            })
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
