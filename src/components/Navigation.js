import React, {Component} from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Navigation extends Component {

    render() {
        return (
            <Navbar  bg="light" expand="lg">
                <Navbar.Brand href="/">Would You Rather</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home Page</Nav.Link>
                        <Nav.Link as={Link} to="/new">New Question</Nav.Link>
                        <Nav.Link as={Link} to="/leader">Leader Board</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation
