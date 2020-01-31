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
                <p>
                  Java
                    <br />
                  Python3
                  </p>
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
                <p>
                  Angular
                    <br />
                  React
                    <br />
                  Node.js/Express.js
              </p>
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
                <p>
                  SQL/NoSQL
                    <br />
                  HTML/CSS
                    <br />
                  Agile Development
                    <br />
                  Git
              </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  </div>

);

export default TechSkill;