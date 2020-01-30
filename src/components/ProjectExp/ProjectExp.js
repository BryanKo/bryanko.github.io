import React from 'react';
import './ProjectExp.css';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container, Button } from 'react-bootstrap';
import { Chip } from '@material-ui/core/';
import { Web, Android } from '@material-ui/icons';

const ProjectExp = () => {
  return (
    <Container>
      <div className="section-size">
        <h1 className="center-timeline">Projects</h1>
        <VerticalTimeline
          animate={true}
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2018 - June 2018"
            iconStyle={{ background: '#81d4fa', color: '#fff' }}
            icon={<Web />}
          >
            <div>
              <div>
                <Chip className="chip-padding" label={"React"} />
                <Chip className="chip-padding" label={"AWS"} />
                <Chip className="chip-padding" label={"DynamoDB"} />
              </div>
              <h3 className="vertical-timeline-element-title">IoT Data Visualization Console</h3>
              <h4 className="vertical-timeline-element-subtitle">React Project</h4>
              <p>
                Visualizes IoT device data produce understandable information.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2018 - March 2018"
            iconStyle={{ background: '#81d4fa', color: '#fff' }}
            icon={<Web />}
          >
            <div>
              <div>
                <Chip className="chip-padding" label={"React"} />
                <Chip className="chip-padding" label={"Express.js"} />
                <Chip className="chip-padding" label={"Yelp API"} />
              </div>
              <h3 className="vertical-timeline-element-title">Fast Resturant Suggestion</h3>
              <h4 className="vertical-timeline-element-subtitle">React Project</h4>
              <p>Suggest resturant suggested based on computer location and user input.</p>
              <Button className="btn-padding" variant="link" href="https://github.com/BryanKo/food-now">Source Code</Button>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2017 - December 2017"
            iconStyle={{ background: '#43a047', color: '#fff' }}
            icon={<Android />}
          >
            <div>
              <div>
                <Chip className="chip-padding" label={"Android"} />
                <Chip className="chip-padding" label={"Yelp API"} />
              </div>
              <h3 className="vertical-timeline-element-title">Activity Planner</h3>
              <h4 className="vertical-timeline-element-subtitle">Android Project</h4>
              <p>Suggests activites to do based on device location and future weather and time.</p>
              <Button className="btn-padding" variant="link" href="https://github.com/BryanKo/Welp">Source Code</Button>
            </div>
          </VerticalTimelineElement>        
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="November 2017"
          iconStyle={{ background: '#43a047', color: '#fff' }}
          icon={<Android />}
        >
          <div>
            <div>
              <Chip className="chip-padding" label={"Android"} />
            </div>
            <h3 className="vertical-timeline-element-title">Connect4</h3>
            <h4 className="vertical-timeline-element-subtitle">Android Project</h4>
            <p>Connect4 Android Application</p>
            <Button className="btn-padding" variant="link" href="https://github.com/BryanKo/Connect4">Source Code</Button>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2017"
          iconStyle={{ background: '#43a047', color: '#fff' }}
          icon={<Android />}
        >
          <div>
            <div>
              <Chip className="chip-padding" label={"Android"} />
            </div>
            <h3 className="vertical-timeline-element-title">Android Calculator</h3>
            <h4 className="vertical-timeline-element-subtitle">Android Project</h4>
            <p>Simple Android calculator to learn about Android application.</p>
            <Button className="btn-padding" variant="link" href="https://github.com/BryanKo/SimpleAndroidCalc">Source Code</Button>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2017 - June 2017"
            iconStyle={{ background: '#f44336', color: '#fff' }}
            icon={<Web />}
          >
            <div>
              <div>
                <Chip className="chip-padding" label={"Angular"} />
                <Chip className="chip-padding" label={"Express.js"} />
                <Chip className="chip-padding" label={"Google Maps API"} />
              </div>
              <h3 className="vertical-timeline-element-title">Location Review</h3>
              <h4 className="vertical-timeline-element-subtitle">Angular Project</h4>
              <p>Community driven platform to review locations on the map.</p>
              <Button className="btn-padding" variant="link" href="https://github.com/BryanKo/Fam">Source Code</Button>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>

      </div>
    </Container>
  )
};

export default ProjectExp;