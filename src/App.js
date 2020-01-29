import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IntroImg from './img/ucscBackground.jpg';
import profileImg from './img/profilePic.jpg';
import { Container, Row, Col } from 'react-bootstrap';

import IntroBanner from './components/IntroBanner/IntroBanner';
import { ParallaxProvider } from 'react-scroll-parallax';
import ProfilePicture from './components/ProfiePicture/ProfilePicture';
import ProfileDesc from './components/ProfileDesc/ProfileDesc';
import ProjectExp from './components/ProjectExp/ProjectExp';
import WorkExp from './components/WorkExp/WorkExp';
import TechSkill from './components/TechSkill/TechSkill';



function App() {
  return (
    <div className="app">
      <div>
        <ParallaxProvider>
          <IntroBanner
            min={'-30%'}
            max={'0%'}
            image={IntroImg}
          />
          <Container>
            <Row className="center-profile">
              <Col xs={12} md={4}>
                <ProfilePicture image={profileImg} />
              </Col>
              <Col xs={12} md={8} className="profile-box">
                <ProfileDesc />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <WorkExp />
              </Col>
              <Row>
                <TechSkill />
              </Row>
            </Row>

            <ProjectExp />
          </Container>
        </ParallaxProvider>
      </div>
    </div>

  );
}

export default App;
