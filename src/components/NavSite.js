import React from 'react'
import {Navbar,Button,Nav} from 'react-bootstrap'

const NavSite = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Watch2Chill</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/videos">Videos</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav>
          <Button href="/login" variant="outline-info">Login</Button>
        </Nav>
      </Navbar>
    )
}

export default NavSite
