import React from 'react';
import './HobbyDesc.css';
import SakurajimaMai from './../../img/sakurajima-mai.jpg';
import Computer from './../../img/computer.jpg';
import A5Wagu from './../../img/a5-wagu.jpg';
import MHW from './../../img/monster-hunter.jpg';
import MejiShrine from './../../img/meji-shrine.jpg';
import MAL from './../../img/mal.png';
import CPU from './../../img/cpu.png';
import CreditCard from './../../img/credit-card.jpg';
import Japanese from './../../img/japanese.jpg';

import { Card, Container, Row, Col } from 'react-bootstrap';

const HobbyDesc = () => (
  <div className="hobby-section">
    <div className="hobby-title">
      <h1>Interest</h1>
    </div>
    <Container className="hobby-content justify-content-md-center">
      <Row className="hobby-row">
        <Col md={4} xs={12}>
          <Card className="hobby-card">
            <Card.Img variant="top" className="card-custom-img" src={CPU} />
            <Card.Body>
              <Card.Title>Technology</Card.Title>
              <Card.Text>
                Machine Learning <br />
                Computer Vision <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12}>
          <Card className="hobby-card">
            <Card.Img variant="top" className="card-custom-img" src={CreditCard} />
            <Card.Body>
              <Card.Title>Money Management</Card.Title>
              <Card.Text>
                Credit Card <br />
                Investing
            </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12}>
          <Card className="hobby-card">
            <Card.Img variant="top" className="card-custom-img" src={Japanese} />
            <Card.Body>
              <Card.Title>Language</Card.Title>
              <Card.Text>
                Japanese
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <div className="hobby-title">
      <h1>Hobbies</h1>
    </div>
    <Container className="hobby-content justify-content-md-center">
      <Row className="hobby-row">
        <Col md={4} xs={12}>
          <Card className="hobby-card">
            <Card.Img variant="top" className="card-custom-img" src={MHW} />
            <Card.Body>
              <Card.Title>Games</Card.Title>
              <Card.Text>
                Monster Hunter World <br />
                Final Fantasy XIV <br />
                osu!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12}>
          <Card className="hobby-card">
            <Card.Img variant="top" className="card-custom-img" src={MejiShrine} />
            <Card.Body>
              <Card.Title>Traveling</Card.Title>
              <Card.Text>
                Tokyo <br />
                Taiwan <br />
                Hong Kong <br />
                Seattle <br />
                Vancouver
            </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12}>
          <Card className="hobby-card">
            <Card.Img variant="top" className="card-custom-img" src={A5Wagu} />
            <Card.Body>
              <Card.Title>Food</Card.Title>
              <Card.Text>
                A5 Wagu Beef <br />
                Hotpot <br />
                Xiao Long Bao <br />
                Korean BBQ <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="hobby-row justify-content-md-center">
        <Col md={4} xs={12}>
          <Card className="hobby-card">
            <Card.Img variant="top" className="card-custom-img" src={Computer} />
            <Card.Body>
              <Card.Title>Computer</Card.Title>
              <Card.Text>
                R7 3700X <br />
                RTX 2070 Super <br />
                32GB RAM
            </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12}>
          <Card className="hobby-card">
            <Card.Img variant="top" className="card-custom-img" src={MAL} />
            <Card.Body>
              <Card.Title>Anime</Card.Title>
              <Card.Text>
                Seishun Buta Yarou <br />
                Code Geasse <br />
                Full Metal Alchemist Brotherhood
            </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12}>
          <Card className="hobby-card">
            <Card.Img variant="top" className="card-custom-img" src={SakurajimaMai} />
            <Card.Body>
              <Card.Title>Best Waifu</Card.Title>
              <Card.Text>
                Sakurajima Mai <br />
                Your waifu is trash.
            </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HobbyDesc;