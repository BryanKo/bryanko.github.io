import React from 'react';
import './ExpAccordion.css';
import { Accordion, Card } from 'react-bootstrap';

const ExpAccordion = ({ exps }) => {
  let exp = [];
  for (let i = 0; i < exps.length; i++) {
    exp.push(
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={i}>
          {exps[i].title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i}>
          <Card.Body>{exps[i].desc}</Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  }
  return (
    <Accordion>
      {exp}
    </Accordion>
  )
};

export default ExpAccordion;