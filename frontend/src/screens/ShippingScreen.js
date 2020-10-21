import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Image, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from "./../actions/cartAction";
import CheckoutSteps from "./../components/CheckoutSteps";
import Address from "../images/address.png";
import '../style/address.css'

function ShippingScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const dispatch = useDispatch();

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  console.log(shippingAddress);

  return (
   <div className='col-12'>
     <br />
      <CheckoutSteps step1 step2 />
     <br />
     <br />

<div className='address'>
      <Row className='addalert'>
      <Col className='col-6'>
      <Alert className='alertadd' variant="success">
  <Alert.Heading>Hey!, Nice to see you</Alert.Heading>
  <p>We have a good news.We will come & collect your material at your place.</p>
  
  <p>
    Please provide your address for material collecting.
  </p>
</Alert>
      <Image className='addressimg' src={Address} alt='website logo' />
      
      </Col>
      <Col className='add col-6'>
        <h3>Address</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" className='btn-primary'>
          Continue
        </Button>
      </Form>
      </Col>
      </Row>
   </div>
   </div>
  );
}

export default ShippingScreen;
