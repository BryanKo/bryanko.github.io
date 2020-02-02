import React from 'react';
import './Nav.css';

import { Menu } from '@material-ui/icons';
// import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';


const Navs = () => (
  <div>
    <Navbar className="nav-color" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Bryan Ko</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="nav-content-color" id="basic-navbar-nav">
        <Nav className="ml-auto nav-content-color">
          <Nav.Link>
            <Link
              to="work"
              spy={true}
              smooth={true}
              duration={500}
            >
              Work Experience
          </Link>
          </Nav.Link>
          <Nav.Link href="#skill">Technical Skills</Nav.Link>
          <Nav.Link href="#project">Porjects</Nav.Link>
          <Nav.Link href="#interest">Interests</Nav.Link>
          <Nav.Link href="#hobbies">Hobbies</Nav.Link>
          <Nav.Link href="https://github.com/BryanKo">Github</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/bryan-ko/">Linkedin</Nav.Link>
          <Nav.Link href="mailto:bryankko1@gmail.com">Email</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Navs;