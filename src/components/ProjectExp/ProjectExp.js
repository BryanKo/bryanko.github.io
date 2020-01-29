import React from 'react';
import './ProjectExp.css';
import LMLogo from './../../img/lmLogo.png';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ProjectExp = () => {
  return (
    <div>
      <h1 className="center-timeline">Projects</h1>
      <VerticalTimeline
        animate={true}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Febuary 2019 - Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Bluejay Mobile Health</h3>
          <h4 className="vertical-timeline-element-subtitle">QA Engineer Intern</h4>
          <p>
            Description about Bluejay Mobile Health
        </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>

  )
};

export default ProjectExp;