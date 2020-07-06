import React, {Component} from 'react'
import { connect } from 'react-redux'
import Question from "./Question";

class Homepage extends Component {

    render() {
        const { questionsIds } = this.props

        return (
            <div className="card mt-5">
                <ul className="list-unstyled">
                    {
                        questionsIds.map((id) => (
                            <li key={id}>
                                <Question id={id} />
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
        // questions: Object.values(questions)
        questionsIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

// return {
//     tweetsIds: Object.keys(tweets)
//         .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
// }

export default connect(mapStateToProps)(Homepage)
