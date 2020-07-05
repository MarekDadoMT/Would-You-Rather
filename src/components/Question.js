import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Card, Button, Form } from 'react-bootstrap'
import { filter, find, findKey } from 'lodash'
import { Link } from 'react-router-dom'
import { handleSaveAnswer } from '../actions/questions'

class Question extends Component {

    onChangeValue = (e) => {

        const {dispatch, question, authedUser} = this.props

        dispatch(handleSaveAnswer({
            authedUser,
            id: question.id,
            answer: e.target.value
        }))
    }

    render() {
        const { authedUser, pathname, isAnswered, question, author  } = this.props


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
                                {
                                    pathname === undefined
                                        ? <div>
                                            <Card.Text>
                                                ...{question.optionOne.text}...
                                            </Card.Text>

                                            <Link to={`/questions/${question.id}`} className="tweet">
                                                <Button variant="outline-success">View Poll</Button>
                                            </Link>
                                        </div>

                                        : <div onChange={this.onChangeValue}>
                                            <div><input type="radio" value="optionOne" name="option"/>{question.optionOne.text}</div>
                                            <div><input type="radio" value="optionTwo" name="option"/>{question.optionTwo.text}</div>
                                        </div>
                                }

                            </div>
                        </div>
                    </Card.Body>
            </Card>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id, pathname}) {
    const question = questions[id]

    const user = find(users, {id: authedUser})
    const isAnswered = Object.keys(user.answers).includes(id)

    const author = filter(users, (user) => (
        user.id === question.author
    ))

    return {
        authedUser,
        pathname,
        isAnswered,
        question: question,
        author: author
    }
}

export default connect(mapStateToProps)(Question)
