import React from 'react';
import './WorkExp.css';
import LMLogo from './../../img/lmLogo.png';
import { Work } from '@material-ui/icons/';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap';


const WorkExp = () => {
  return (
    <Container>
      <div className="section-size">
        <h1 className="center-timeline">Work Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Febuary 2019 - Present"
            iconStyle={{ background: '#1e88e5', color: '#fff' }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">Lockheed Martin</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Engineer Asc</h4>
            <div>
              <img className="fit-img" src={LMLogo} alt="LMLogo" />
              <p>Description about Lockheed Martin</p>
            </div>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 2016 - January 2017"
            iconStyle={{ background: '#1e88e5', color: '#fff' }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">Bluejay Mobile Health</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Engineer Intern</h4>
            <p>
              Description about Bluejay Mobile Health
        </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2016 - Septemer 2016"
            iconStyle={{ background: '#1e88e5', color: '#fff' }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">Bluejay Mobile Health</h3>
            <h4 className="vertical-timeline-element-subtitle">QA Engineer Intern</h4>
            <p>
              Description about Bluejay Mobile Health
        </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Container>
  )
};

export default WorkExp;