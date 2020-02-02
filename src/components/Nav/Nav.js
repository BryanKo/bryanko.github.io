import React from 'react';
import './Nav.css';

import { Menu } from '@material-ui/icons';
// import { Navbar, Nav } from 'react-bootstrap';

import { Navbar, Nav } from 'react-bootstrap';


const Navs = () => (
  <div>
    <Navbar className="nav-color" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Bryan Ko</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="nav-content-color" id="basic-navbar-nav">
        <Nav className="ml-auto nav-content-color">
          <Nav.Link>Work Experience</Nav.Link>
          <Nav.Link>Technical Skills</Nav.Link>
          <Nav.Link>Porjects</Nav.Link>
          <Nav.Link>Interests</Nav.Link>
          <Nav.Link>Hobbies</Nav.Link>
          <Nav.Link>Github</Nav.Link>
          <Nav.Link>Linkedin</Nav.Link>
          <Nav.Link>Email</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Navs;