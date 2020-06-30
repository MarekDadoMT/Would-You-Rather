import { _getQuestions } from './_DATA'

export function getInitialData () {
    return Promise.all([
        _getQuestions()
    ]).then(([questions]) => ({
        questions
    }))
}
