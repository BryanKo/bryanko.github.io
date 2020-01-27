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
import ExpAccordion from './components/ExpAccordion/ExpAccordion';
import ProjectExp from './components/ProjectExp/ProjectExp';



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
          <Row>
            <Col>
              <div className="center-title-section">
                <h1>Work Experience</h1>
              </div>
              <ExpAccordion
                exps={[
                  {
                    title: "Software Engineer Asc at Lockheed Martin | Febuary 2019 - Present",
                    desc: "Description of work at Lockheed Martin",
                    img: "test",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="center-title-section">
                <h1>Projects</h1>
              </div>
              <ExpAccordion
                exps={[
                  {
                    title: "IoT Data Visualization Console",
                    desc: "Description of Amazon Lab126 Project",
                    img: "test",
                  },
                  {
                    title: "Welp",
                    desc: "Description of Welp",
                    img: "test",
                  },
                  {
                    title: "Food Now",
                    desc: "Description of Food Now",
                    img: "test",
                  },
                  {
                    title: "Fam",
                    desc: "Description of Fam",
                    img: "test",
                  },
                ]}
              />
            </Col>
          </Row>
        </Container>
      </main>
    </ParallaxProvider>
  );
}

export default App;
