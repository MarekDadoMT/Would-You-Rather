import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Card, Button, ProgressBar } from 'react-bootstrap'
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

        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        const numberOfVotes = question.optionOne.votes.length + question.optionTwo.votes.length
        const optionOnePercentage = (optionOneVotes * 100) / numberOfVotes
        const optionTwoPercentage = (optionTwoVotes * 100) / numberOfVotes

        // If user voted for specific option, return true
        function answer(option) {
            if(option.find(user => user === authedUser)){
                return true
            } else {
                return false
            }
        }

        return (
            <Card className="m-4 w-50 mx-auto">
                <Card.Header>{author[0].name} asks:</Card.Header>
                <Card.Body className="align-self-center space-between">
                    <div className="row">
                        <div className="mr-5 align-self-center">
                            <img
                                src={author[0].avatarURL}
                                alt={`Avatar of ${author[0].name}`}
                                className="avatar"
                            />
                        </div>

                        <div className="align-self-center">
                            {
                                pathname === undefined
                                    ? <div>
                                        <Card.Title>Would you rather</Card.Title>
                                        <Card.Text>
                                            ...{question.optionOne.text}...
                                        </Card.Text>

                                        <Link to={`/questions/${question.id}`} className="tweet">
                                            <Button variant="outline-success">View Poll</Button>
                                        </Link>
                                    </div>

                                    : (isAnswered === false
                                        ? <div>
                                            <Card.Title>Would you rather</Card.Title>
                                            <div onChange={this.onChangeValue}>
                                                <div><input type="radio" value="optionOne" name="option"/>{question.optionOne.text}</div>
                                                <div><input type="radio" value="optionTwo" name="option"/>{question.optionTwo.text}</div>
                                            </div>
                                        </div>
                                        : <div>
                                            <Card.Title style={{paddingLeft: 20}}>Results</Card.Title>
                                            <Card style={{padding: 20, margin: 10}} border={answer(question.optionOne.votes) ? "success" : null}>
                                                <p>Would you rather {question.optionOne.text}</p>
                                                <ProgressBar animated now={optionOnePercentage} label={`${optionOnePercentage}%`} />
                                                <h5 className="text-center mt-1">
                                                    {question.optionOne.votes.length} out of {numberOfVotes} votes
                                                </h5>
                                            </Card>
                                            <Card style={{padding: 20, margin: 10}} border={answer(question.optionTwo.votes) ? "success" : null}>
                                                <p>Would you rather {question.optionTwo.text}</p>
                                                <ProgressBar animated now={optionTwoPercentage} label={`${optionTwoPercentage}%`} />
                                                <h5 className="text-center mt-1">
                                                    {question.optionTwo.votes.length} out of {numberOfVotes} votes
                                                </h5>
                                            </Card>

                                        </div>
                                        )
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
