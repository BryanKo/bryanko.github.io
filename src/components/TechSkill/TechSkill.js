import React from 'react';
import './TechSkill.css';

import { CardDeck, Card, Container } from 'react-bootstrap';

const TechSkill = () => (

  <div className="tech-section">
    <div className="tech-title">
      <h1>Techinical Skills</h1>
    </div>
    <Container className="tech-content">
      <CardDeck className="tech-deck">
        <Card className="tech-card">
          <Card.Img variant="top" src="holder.js/100px180" />
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
        <Card className="tech-card">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Javascript</Card.Title>
            <Card.Text>
              <p>
                Angular (Typescript)
                    <br />
                React
                    <br />
                Node.js/Express
                  </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="tech-card">
          <Card.Img variant="top" src="holder.js/100px180" />
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
        <Card className="tech-card">
          <Card.Img variant="top" src="holder.js/100px180" />
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
      </CardDeck>
    </Container>
  </div>

);

export default TechSkill;