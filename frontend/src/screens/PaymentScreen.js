import React, { useState } from "react";
import { Form, Button, Col, Row, Image} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "./../actions/cartAction";
import Pay from "../images/payment.png";
import '../style/payment.css'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <FormContainer className='pay col-12'>
      <br />
      <CheckoutSteps step1 step2 step3 />
      <br />
      <br />
      <div className='paystep'>
      <Row >
      <Col className='col-6'>
      <h4 className='text-center'>Payment Method</h4>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal/Card"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type='radio'
              label='Cash On Door Step'
              id='Stripe'
              name='paymentMethod'
              value='Cash On Door Step'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            </Form.Group>
        <Button type="submit" className='btn-primary'>
          Continue
        </Button>
      </Form>
      </Col>
      <Col className='col-6'>
      <Image className='paymentimg' src={Pay} alt='website logo' />
      </Col>
      </Row>
      </div>

    </FormContainer>
    
  );
};

export default PaymentScreen;
