import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Emma from './img/emma.jpg';
import profileImg from './img/profilePic.jpg';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
// import ReactGA from 'react-ga';

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
import Analytics from './components/Analytics/Analytics'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.me = React.createRef();
    this.work = React.createRef();
    this.skill = React.createRef();
    this.project = React.createRef();
    this.interestHobbies = React.createRef()
    const trackingId = "UA-157586493-1";
    const location = window.location.pathname + window.location.search
    // ReactGA.initialize(trackingId);
    // ReactGA.set({ page: location });
    // ReactGA.pageview(location);
    // ReactGA.set({
    //   visitied: this.initializeReactGA(),
    // })
  }

  // initializeReactGA() {
  //   ReactGA.pageview('/');
  // }

  render() {
    return (
      <div className="app">
        <div>
          <ParallaxProvider>
            {/* <Navs /> */}
            <div>
              <Navbar className="nav-color" variant="dark" fixed="top" expand="lg">
                <Navbar.Brand onClick={() => {
                  this.me.current.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Bryan Ko
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="nav-content-color" id="basic-navbar-nav">
                  <Nav className="ml-auto nav-content-color">
                    <Nav.Link onClick={() => {
                      this.work.current.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      Work Experience
                    </Nav.Link>
                    <Nav.Link onClick={() => {
                      this.skill.current.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      Technical Skills
                    </Nav.Link>
                    <Nav.Link onClick={() => {
                      this.project.current.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      Projects
                    </Nav.Link>
                    <Nav.Link onClick={() => {
                      this.interestHobbies.current.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      Interests/Hobbies
                    </Nav.Link>
                    <Nav.Link href="https://drive.google.com/file/d/15UbqygBOS-3swFH-S82aYqIryp-cvvwz/view?usp=sharing">
                      Resume
                    </Nav.Link>
                    <Nav.Link href="https://github.com/BryanKo">Github</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/bryan-ko/">Linkedin</Nav.Link>
                    <Nav.Link href="mailto:bryankko1@gmail.com">Email</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <div ref={this.me} />
            <IntroBanner
              min={'-50%'}
              max={'0%'}
              image={Emma}
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
                <Row className="justify-content-md-center">
                  <Col className="about-me" md={7} xs={12}>
                    <h4>About Me</h4>
                    <h5>
                      I graduated from University of California, Santa Cruz with a Computer Science BS degree.
                      I have an interest in creating programs and tinkering with things. 
                      I would like to think I can program... <br />
                      I don't know what I'm doing. Pls hire me.
                    </h5>
                  </Col>
                </Row>
              </Container>
            </div>
            <div ref={this.work} />
            <WorkExp />
            <div ref={this.skill} />
            <TechSkill />
            <div ref={this.project} />
            <ProjectExp />
            <div ref={this.interestHobbies} />
            <HobbyDesc />
            <Footer />
          </ParallaxProvider>
        </div>
      </div>

    );
  }
}

export default App;
