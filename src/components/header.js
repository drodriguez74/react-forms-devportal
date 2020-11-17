// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

const Header = ({ siteTitle }) => (
  <header>
    <>
      <Navbar bg="light" variant="light">
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
        </Navbar.Collapse> */}
        <Nav className="mr-auto">
          <Nav.Link href="/ods">ODS Config</Nav.Link>
          <Nav.Link href="/ondot">OnDot Audit</Nav.Link>
          <NavDropdown title="" id="basic-nav-dropdown">
            <NavDropdown.Item eventKey={3.1}>Action</NavDropdown.Item>
            <NavDropdown.Item eventKey={3.2}>Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey={3.3}>Something else here</NavDropdown.Item>
            <NavDropdown.Item divider />
            <NavDropdown.Item eventKey={3.3}>Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Navbar.Brand href="#home"><span className="fiserv-orange">Fiserv.</span>Admin.</Navbar.Brand>
        <Button variant="secondary" onClick={() => window.location.href='/login'}>Logout</Button>
      </Navbar>
    </>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
