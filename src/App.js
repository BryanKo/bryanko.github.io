import React from 'react';
import logo from './logo.svg';
import './App.css';
import IntroBanner from './components/IntroBanner/IntroBanner';
import IntroImg from './img/ucscBackground.jpg';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const HeroBanner = ({ image, min, max, children }) => (
  <div className="hero-container">
      <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
          <div
              className="hero-image"
              style={{ backgroundImage: `url(${image})` }}
          />
      </Parallax>
      <div className="hero-children">{children}</div>
  </div>
);

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   </div>

    // <div>
    //   <ParallaxProvider>
    //     <main>
    //       <nav />
    //       <IntroBanner
    //         image={IntroImg}
    //         min={"-20"}
    //         max={"20"}
    //       >
    //       <h1>@</h1>
    //       <h1>@</h1>
    //       <h1>@</h1>
    //       <h1>@</h1>
    //       <h1>@</h1>
    //       </IntroBanner>
    //     </main>
    //   </ParallaxProvider>
    //   <div background-color="white" postion="absolute" margin-top="-50%">
    //     Testing
    //   </div>
    // </div>

    <ParallaxProvider>
      <main>
        <nav />
        <IntroBanner
          min={'-20%'}
          max={'20%'}
          image={IntroImg}
        >
          <h1>Hero Banner with Parallax</h1>
        </IntroBanner>
        <h1>Talk about me!</h1>
      </main>
    </ParallaxProvider>
  );
}

export default App;
