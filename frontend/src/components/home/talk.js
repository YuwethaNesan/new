import React from "react";
import { Container, Row, Col,Button,Image } from "react-bootstrap";
import Ceo from "../../images/women.jpg";
import Ceo1 from "../../images/women.jpg";
import Ceo2 from "../../images/women.jpg";


function Talk() {
  return (
      <>

<Row>
<Col className="col-3">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <Image className='workflow responsive' src={Ceo} alt="Jane"/>
    </div>
<div className="flip-card-back">
      <h6>John Doe</h6>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
  </Col>

  <Col className="col-3">
  <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <Image className='workflow responsive' src={Ceo} alt="Jane"/>
    </div>
<div className="flip-card-back">
      <h6>John Doe</h6>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
  </Col>

  <Col className="col-3">
  <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <Image className='workflow responsive' src={Ceo1} alt="Jane"/>
    </div>
<div className="flip-card-back">
      <h6>John Doe</h6>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
  </Col>

  <Col className="col-3">
  <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <Image className='workflow responsive' src={Ceo2} alt="Jane"/>
      <p></p>
    </div>
<div className="flip-card-back">
      <h6>John Doe</h6>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
  </Col>
</Row>
  </>
  );
}

export default Talk;
