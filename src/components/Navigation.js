import React, {Component} from 'react'
import { Navbar, Nav} from 'react-bootstrap'

class Navigation extends Component {

    render() {
        return (
            <Navbar className="fixed-top" bg="light" expand="lg">
                <Navbar.Brand href="/">Would You Rather</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">New Question</Nav.Link>
                        <Nav.Link href="/">Leader Board</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation
