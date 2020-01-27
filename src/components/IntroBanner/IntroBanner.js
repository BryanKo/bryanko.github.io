import React from 'react';
import './IntroBanner.css';

import { Parallax } from 'react-scroll-parallax';

const IntroBanner = ({ image, min, max }) => (
	<div className="intro-container">
		<Parallax y={[min, max]}>
			<div
				className="parallax-img"
				style={{ backgroundImage: `url(${image})`  }}
			/>
		</Parallax>
	</div>
);

export default IntroBanner;