import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { filter } from 'lodash'

class Question extends Component {
    render() {
        const { author, question } = this.props

        return (
            <Card className="m-4 w-50 mx-auto">
                <Card.Header>{author[0].name} asks:</Card.Header>
                    <Card.Body className="align-self-center space-between">
                        <div className="row">
                            <div className="mr-5">
                                <img
                                    src={author[0].avatarURL}
                                    alt={`Avatar of ${author[0].name}`}
                                    className="avatar"
                                />
                            </div>
                            <div className="align-self-center">
                                <Card.Title>Would you rather</Card.Title>
                                <Card.Text>
                                    ...{question.optionOne.text}...
                                </Card.Text>
                                <Button variant="outline-success">View Poll</Button>
                            </div>


                        </div>

                    </Card.Body>
            </Card>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
    const question = questions[id]

    const author = filter(users, (user) => (
        user.id === question.author
    ))

    return {
        authedUser,
        question: question,
        author: author
    }
}

export default connect(mapStateToProps)(Question)
