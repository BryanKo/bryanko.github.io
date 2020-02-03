import React from 'react';
import './WorkExp.css';
import LMLogo from './../../img/lmLogo.png';
import { Work } from '@material-ui/icons/';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Chip } from '@material-ui/core/';


const WorkExp = () => {
  return (
    <Container>
    <Row >
    <Col md={12}>
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
              <Chip className="chip-padding" label={"Python3"} />
              <Chip className="chip-padding" label={"Angular"} />
              <Chip className="chip-padding" label={"React"} />
              <Chip className="chip-padding" label={"Express.js"} />
              <Chip className="chip-padding" label={"Kotlin"} />
            </div>
            <p>Worked on python scripts, web applications, and microservices</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 2016 - January 2017"
            iconStyle={{ background: '#1e88e5', color: '#fff' }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">Bluejay Mobile Health</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Engineer Intern</h4>
            <div>
              <Chip className="chip-padding" label={"PHP"} />
              <Chip className="chip-padding" label={"HTML"} />
              <Chip className="chip-padding" label={"CSS"} />
            </div>
            <p>Frontend web development</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2016 - September 2016"
            iconStyle={{ background: '#1e88e5', color: '#fff' }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">Bluejay Mobile Health</h3>
            <h4 className="vertical-timeline-element-subtitle">QA Engineer Intern</h4>
            <div>
            </div>
            <p>Black box tested Android, iOS, and web application</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      </Col>
      </Row>
    </Container>
  )
};

export default WorkExp;