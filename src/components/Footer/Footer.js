import React from 'react';
import './Footer.css';

import { GitHub, LinkedIn, Email } from '@material-ui/icons';

const Footer = () => (
  <div className="footer-content">
    <div className="contact-info">
      <GitHub />
      <LinkedIn />
      <Email />
    </div>
    <div className="page-bottom">
      Bryan Ko's Website :D
    </div>
  </div>
);

export default Footer;