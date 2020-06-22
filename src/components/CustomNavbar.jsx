import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css';

 class CustomNavbar extends Component {
    render() {
        return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="blue">
  <Navbar.Brand>
  <Link to ="/">Dev life</Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-end" style={{ width: "100%" }}>
      
      <Nav.Link eventKey={2} componentClass={Link}  href ="/" to  ="/">
        Home
      </Nav.Link>
      <Nav.Link eventKey={2} componentClass={Link}  href="/About" to ="/About">
        About
      </Nav.Link>
      <Nav.Link eventKey={2} componentClass={Link}  href ="/News" to ="/News">
        News
      </Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        );
    }
}
export default CustomNavbar;
