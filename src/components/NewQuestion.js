import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {Button, Card, Form} from 'react-bootstrap'
import {handleAddQuestion} from '../actions/questions'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleChangeOptionOne = (e) => {
        const text = e.target.value
        this.setState({
            optionOne: text
        })
    }

    handleChangeOptionTwo = (e) => {
        const text = e.target.value
        this.setState({
            optionTwo: text
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const { optionOne, optionTwo } = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: true
        }))

    }

    render() {
        const { optionOne, optionTwo, toHome } = this.state

        if (toHome === true) {
            return <Redirect to="/" />
        }

        return (
            <Card className="m-4 w-50 mx-auto">
                <Card.Header className="text-center">Create New Question</Card.Header>
                <Card.Body>
                    <h6>Complete the question:</h6>
                    <h4 className="my-3">Would you rather...</h4>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Control type="input" onChange={this.handleChangeOptionOne} value={optionOne} placeholder="Enter Question One Text Here" maxLength={20} required />
                        <h3 className="text-center my-2">OR</h3>
                        <Form.Control type="input" onChange={this.handleChangeOptionTwo} value={optionTwo} placeholder="Enter Question Two Text Here" maxLength={20} required />
                        <Button className="mt-4" variant="success" type="submit" block>Submit</Button>
                    </Form>



                </Card.Body>
            </Card>
        )
    }
}

export default connect()(NewQuestion)

