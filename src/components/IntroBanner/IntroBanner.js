import React from 'react';
import './IntroBanner.css';

import { Parallax } from 'react-scroll-parallax';

const IntroBanner = ({ image, min, max, children }) => (
	<div className="intro-container">
		<Parallax y={[min, max]}>
			<div
				className="parallax-img"
				style={{ backgroundImage: `url(${image})`  }}
			/>
			<div className="intro-children">
				{children}
			</div>
		</Parallax>
	</div>
);

export default IntroBanner;