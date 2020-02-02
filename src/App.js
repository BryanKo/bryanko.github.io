import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IntroImg from './img/ucscBackground.jpg';
import profileImg from './img/profilePic.jpg';
import { Container, Row, Col } from 'react-bootstrap';

import Navs from './components/Nav/Nav';
import IntroBanner from './components/IntroBanner/IntroBanner';
import { ParallaxProvider } from 'react-scroll-parallax';
import ProfilePicture from './components/ProfiePicture/ProfilePicture';
import ProfileDesc from './components/ProfileDesc/ProfileDesc';
import ProjectExp from './components/ProjectExp/ProjectExp';
import WorkExp from './components/WorkExp/WorkExp';
import TechSkill from './components/TechSkill/TechSkill';
import HobbyDesc from './components/HobbyDesc/HobbyDesc';
import Footer from './components/Footer/Footer';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="app">
      <div>
        <ParallaxProvider>
          <Navs />
          <IntroBanner
            min={'-30%'}
            max={'0%'}
            image={IntroImg}
          />
          <div className="profile">
          <Container>
            <Row className="center-profile">
              <Col xs={12} md={4}>
                <ProfilePicture image={profileImg} />
              </Col>
              <Col xs={12} md={8} className="profile-box">
                <ProfileDesc />
              </Col>
            </Row>
          </Container>
          </div>
          <WorkExp />
          <TechSkill />
          <ProjectExp />
          <HobbyDesc />
          <Footer />
        </ParallaxProvider>
      </div>
    </div>

  );
}

export default App;
