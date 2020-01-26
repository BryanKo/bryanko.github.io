import React from 'react';
import logo from './logo.svg';
import './App.css';
import IntroBanner from './components/IntroBanner/IntroBanner';
import IntroImg from './img/ucscBackground.jpg';
import profileImg from './img/profilePic.jpg';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <main>
        {/* <nav /> */}
        <IntroBanner
          min={'-50%'}
          max={'0%'}
          image={IntroImg}
        >

          <div className="intro-center">
            <img className="profile-circle" src={profileImg}/>
            <div className="">
              <h2>Bryan Ko</h2>
              <h3>Software Engineer Asc at Lockheed Martin</h3>
              <h3>I am a software engineer that loves to travel and eat great food!</h3>
            </div>
          </div>
          
        </IntroBanner>
        <h1>Talk about me!</h1>
      </main>
    </ParallaxProvider>
  );
}

export default App;
