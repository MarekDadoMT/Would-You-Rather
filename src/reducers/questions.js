import { RECEIVE_QUESTIONS, ADD_QUESTION_TO_QUESTIONS, SAVE_ANSWER_TO_QUESTIONS } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }

        case ADD_QUESTION_TO_QUESTIONS:
            return {
                ...state,
                [action.question.id]: action.question
            }


        case SAVE_ANSWER_TO_QUESTIONS:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.answer]: {
                        ...state[action.id][action.answer],
                        votes: state[action.id][action.answer].votes.concat([action.authedUser])
                    }
                }
            }

        default:
            return state
    }
}
