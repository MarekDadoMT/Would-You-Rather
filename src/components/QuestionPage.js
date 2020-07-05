import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {

    render() {
        const { question_id, pathname } = this.props

        return (
            <Question id={question_id} pathname={pathname} />
        )
    }
}

function mapStateToProps({ authedUser }, props) {
    const { question_id } = props.match.params
    const { pathname } = props.location

    return {
        question_id,
        pathname,
        authedUser
    }

}

export default connect(mapStateToProps)(QuestionPage)
