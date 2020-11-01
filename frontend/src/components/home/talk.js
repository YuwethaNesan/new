import React from "react";
import { Container, Row, Col,Button,Image } from "react-bootstrap";
import Ceo from "../../images/cover/ceo2.png";
import Ceo1 from "../../images/cover/ceo3.png";
import Ceo2 from "../../images/cover/ceo4.png";
import Ceo3 from "../../images/cover/ceo1.png";

import "../../style/Talk.css"


function Talk() {
  return (
      <>

<Row>
<Col className="col-3">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <Image className='workflow responsive' src={Ceo} alt="Jane" fluid/>
    </div>
<div className="flip-card-back">
      <p>Athira</p>
      <p>Doctor</p>
      <p>An amazing plantform for aari designing & embroidery. I love the way they responce us</p>
    </div>
  </div>
</div>
  </Col>

  <Col className="col-3">
  <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <Image className='workflow responsive' src={Ceo3} alt="Jane"/>
    </div>
<div className="flip-card-back">
<p>Sana Hassan</p>
      <p>Teacher</p>
      <p>Stunning designs 100% perfect embroidery. <br />Good luck </p>
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
<p>Hassan</p>
      <p>Teacher</p>
      <p>I ordered for a saree blouse aari embroidery.Their material collecting service is awesome <br />Keep it Up </p>
    
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
<p>Sonia</p>
      <p>Fashion designer</p>
      <p>Reasonable Prices and easy to access their service in anytime really thanks to your unique design selling service</p>
    </div>
  </div>
</div>
  </Col>
</Row>
  </>
  );
}

export default Talk;
