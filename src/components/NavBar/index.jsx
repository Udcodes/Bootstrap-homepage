import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './styles.css';

const NavBar = () => {
  return (
    <>
      <Navbar border="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Bootstrap Themes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav mr-auto">
              <Nav.Link href="#">Categories</Nav.Link>
              <Nav.Link href="#">Why Our Themes?</Nav.Link>
              <Nav.Link href="#">The Guides</Nav.Link>
            </Nav>
            <div className="dropdown-divider"></div>
            <Form inline>
              <i className="fa fa-search" aria-hidden="true"></i>
              <FormControl type="text" placeholder="Search" className="mr-sm-2 search_input" />
            </Form>
            <div className="dropdown-divider"></div>
            <Nav className="navbar-nav">
              <Nav.Link href="#home">Sign in</Nav.Link>
              <Nav.Link href="#link">Sign up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
