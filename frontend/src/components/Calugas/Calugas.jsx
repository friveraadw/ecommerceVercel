import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Calugas.css'; 

const Calugas = () => {
  return (
    <Row>
      <Col lg={4} md={6} sm={6}>
        <div className="caluga">
          <img src="https://placekitten.com/400/400" alt="Caluga 1" />
        </div>
      </Col>
      <Col lg={4} md={6} sm={6}>
        <div className="caluga">
          <img src="https://placekitten.com/400/400" alt="Caluga 2" />
        </div>
      </Col>
      <Col lg={4} md={6} sm={6}>
        <div className="caluga">
          <img src="https://placekitten.com/400/400" alt="Caluga 3" />
        </div>
      </Col>
      <Col lg={4} md={6} sm={6}>
        <div className="caluga">
          <img src="https://placekitten.com/400/400" alt="Caluga 4" />
        </div>
      </Col>
      <Col lg={4} md={6} sm={6}>
        <div className="caluga">
          <img src="https://placekitten.com/400/400" alt="Caluga 5" />
        </div>
      </Col>
      <Col lg={4} md={6} sm={6}>
        <div className="caluga">
          <img src="https://placekitten.com/400/400" alt="Caluga 6" />
        </div>
      </Col>
    </Row>
  );
};

export default Calugas;
