import React from 'react';
import './Footer.css';

import { GitHub, LinkedIn, Email } from '@material-ui/icons';

const Footer = () => (
  <div className="footer-content">
    <div className="contact-info">
      <a href="https://github.com/BryanKo">
        <GitHub fontSize="large" className="contact-padding" />
      </a>

      <a href="https://www.linkedin.com/in/bryan-ko/">
        <LinkedIn fontSize="large" className="contact-padding" />
      </a>
      <a href="mailto:bryankko1@gmail.com">
        <Email fontSize="large" className="contact-padding" href="" />
      </a>
    </div>
    <div className="page-bottom">
      Bryan Ko's Website :D
    </div>
  </div>
);

export default Footer;