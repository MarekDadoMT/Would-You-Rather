import React, {Component} from 'react'
import { connect } from 'react-redux'
import { find, filter, indexOf } from 'lodash'
import Question from './Question'
import {ToggleButtonGroup, ToggleButton, Card, Button } from 'react-bootstrap'

class Homepage extends Component {
    constructor(props) {
        super(props)
        this.loadUnanswered = this.loadUnanswered.bind(this)
        this.loadAnswered = this.loadAnswered.bind(this)
    }

    state = {
        view: "unanswered"
    }


    loadUnanswered() {
        this.setState({
            view: "unanswered"
        })
    }

    loadAnswered() {
        this.setState({
            view: "answered"
        })
    }

    render() {
        const { answeredIds, unansweredIds} = this.props

        return (
                <Card>
                    <ToggleButtonGroup name="radio">
                        <Button variant="secondary" onClick={this.loadUnanswered}>
                            Unanswered
                        </Button>
                        <Button variant="secondary" onClick={this.loadAnswered}>
                            Answered
                        </Button>
                    </ToggleButtonGroup>

                    {
                       this.state.view === "unanswered"
                            ? <ul className="list-unstyled">
                                {
                                    unansweredIds.map((id) => (
                                        <li key={id}>
                                            <Question id={id} />
                                        </li>
                                    ))
                                }
                            </ul>
                            : <ul className="list-unstyled">
                                {
                                    answeredIds.map((id) => (
                                        <li key={id}>
                                            <Question id={id} />
                                        </li>
                                    ))
                                }
                            </ul>
                    }
                </Card>


        )
    }
}

function mapStateToProps({ authedUser, users, questions }) {

    const user = find(users, {id: authedUser})

    const answeredIds  = Object.keys(user.answers).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    const unansweredIds = filter(questions, (v) => indexOf(answeredIds, v.id) === -1).map(item => item.id).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    return {
        answeredIds: answeredIds,
        unansweredIds: unansweredIds
    }
}


export default connect(mapStateToProps)(Homepage)
