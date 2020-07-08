import React, {Component} from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {handleSetAuthedUser} from "../actions/authedUser";
import { Button } from "react-bootstrap";
import { find } from 'lodash'

class Navigation extends Component {

    handleLogOut = () => {
        const { dispatch } = this.props

        dispatch(handleSetAuthedUser(null))
        window.location.reload(false)
    }

    render() {
        const { user, isSigned } = this.props

        return (
            <Navbar  bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">Would You Rather</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home Page</Nav.Link>
                        <Nav.Link as={Link} to="/add">New Question</Nav.Link>
                        <Nav.Link as={Link} to="/leader">Leader Board</Nav.Link>
                        {
                            isSigned
                                ? <div className="row ml-auto">
                                    <Nav.Link  disabled className="ml-5">Hello, {user.name}</Nav.Link>
                                    <Button className="ml-3" type="button" onClick={this.handleLogOut}>Log Out</Button>
                                </div>
                                : null
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    if(authedUser){
        const user = find(users, {id: authedUser})
    }


    //console.log(user)
    return {
        user: authedUser
                ? find(users, {id: authedUser})
                : null,
        isSigned: authedUser !== null
    }
}

export default connect(mapStateToProps)(Navigation)
