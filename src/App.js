import React from 'react';
import logo from './logo.svg';
import './App.css';
import IntroImg from './img/ucscBackground.jpg';
import profileImg from './img/profilePic.jpg';
import { Container, Row, Col } from 'react-bootstrap';

import IntroBanner from './components/IntroBanner/IntroBanner';
import { ParallaxProvider } from 'react-scroll-parallax';
import ProfilePicture from './components/ProfiePicture/ProfilePicture';
import ProfileDesc from './components/ProfileDesc/ProfileDesc';



function App() {
  return (
    <ParallaxProvider>
      <main>
        {/* <nav /> */}
        <IntroBanner
          min={'-30%'}
          max={'0%'}
          image={IntroImg}
        >
        </IntroBanner>
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
        <Container>
          <h1>Talk about me!</h1>
        </Container>
      </main>
    </ParallaxProvider>
  );
}

export default App;
