import React, {Component} from 'react'
import { connect } from 'react-redux'
import { find } from 'lodash'
import {Card} from 'react-bootstrap'

class LeaderItem extends Component {

    render() {
        const { user, index } = this.props

        const answers = Object.keys(user.answers).length
        const questions = user.questions.length
        const sum = answers + questions

        return (
            <Card className="m-4 w-50 mx-auto">
                <Card.Body className="space-between">
                    <span className="badge">{index + 1}</span>
                    <div className="row">
                        <div className="mx-auto align-self-center">
                            <img
                                src={user.avatarURL}
                                alt={`Avatar of ${user.name}`}
                                className="avatar"
                            />
                        </div>

                        <div className="mx-auto align-self-center">
                            <h2>{user.name}</h2>
                            <p>Answered questions       {answers}</p>
                            <p>Created questions        {questions}</p>
                        </div>

                        <Card className="mx-auto align-self-center">
                            <Card.Header>
                                <h4>Score</h4>
                            </Card.Header>
                            <Card.Body className="align-self-center" style={{fontSize: 30}}>{sum}</Card.Body>
                        </Card>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

function mapStateToProps({users}, {id, index}) {
    const user = find(users, {id: id})

    return {
        user,
        index
    }
}

export default connect(mapStateToProps)(LeaderItem)
