import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { handleSetAuthedUser } from "../actions/authedUser";
import { LoadingBar } from 'react-redux-loading'

class SignIn extends Component {
    state = {
        selectedUser: null
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const selectedUserObject = this.props.users.filter((user) => user.id === this.state.selectedUser)
        this.props.dispatch(handleSetAuthedUser(selectedUserObject))
    }

    handleSelect = (e) => {
        e.preventDefault()
        const selectedUser = e.target.value

        this.setState({
            selectedUser: selectedUser
        })
    }

    render() {

        return (
            <div className="container">
                <div className="card text-center">
                    <div className="card-header">
                        Welcome to the Game
                    </div>
                    <div className="card-body">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label>Select user to sign in</Form.Label>
                                <Form.Control as="select" onChange={this.handleSelect}  custom>
                                    {

                                        this.props.users.map((user) => (
                                            <option key={user.id}>{user.id}</option>
                                        ))
                                    }
                                </Form.Control>

                                <Button
                                    className="btn mt-2"
                                    type="submit"
                                    variant="primary"
                                >
                                    SIGN IN
                                </Button>
                            </Form.Group>
                        </Form>

                    </div>
                </div>
            </div>

        )
    }

}

function mapStateToProps({ users }) {
    return {
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(SignIn)
