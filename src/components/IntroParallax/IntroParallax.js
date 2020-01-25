import React from 'react';
import './IntroParallax.css';
import logo from './../../img/ucscBackground.jpg';
import { Parallax } from 'react-scroll-parallax';

const IntroParallax = () => {
    return <div>
        <h1>HELLO</h1>
        <Parallax className="custom-class" y={[0,20]} tagOuter="figure">
            <img src={logo}/>
        </Parallax>
    </div>
        
}
export default IntroParallax;