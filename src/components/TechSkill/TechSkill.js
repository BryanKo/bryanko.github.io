import React from 'react';
import './TechSkill.css';

import Dot from './../../img/dots.jpeg';
import JS from './../../img/nodejs.png';
import Java from './../../img/java.png';

import { Row, Col, Card, Container } from 'react-bootstrap';

const TechSkill = () => (

  <div className="tech-section">
    <div className="tech-title">
      <h1>Techinical Skills</h1>
    </div>
    <Container>
      <Row className="tech-content justify-content-md-center">
        <Col md={4} xs={12}>
          <Card className="tech-card">
            <Card.Img variant="top" className="card-custom-img" src={Java} />
            <Card.Body>
              <Card.Title>Programming Languages</Card.Title>
              <Card.Text>
                Java <br />
                Python3
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12}>
          <Card className="tech-card">
            <Card.Img variant="top" className="card-custom-img" src={JS} />
            <Card.Body>
              <Card.Title>Frameworks</Card.Title>
              <Card.Text>
                Angular <br />
                React <br />
                Node.js/Express.js
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12}>
          <Card className="tech-card">
            <Card.Img variant="top" className="card-custom-img" src={Dot} />
            <Card.Body>
              <Card.Title>Other</Card.Title>
              <Card.Text>
                SQL/NoSQL <br />
                HTML/CSS <br />
                Agile Development <br />
                Git
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  </div>

);

export default TechSkill;