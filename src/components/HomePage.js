import React, {Component} from 'react'
import { connect } from 'react-redux'
import Question from "./Question";

class Homepage extends Component {

    render() {
        const { questions } = this.props

        return (
            <div className="card mt-5">
                <ul className="list-unstyled">
                    {
                        questions.map((question) => (
                            <li key={question.id}>
                                <Question id={question.id} />
                            </li>
                        ))
                    }
                </ul>
            </div>

        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questions: Object.values(questions)
    }
}

export default connect(mapStateToProps)(Homepage)
