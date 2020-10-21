import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { Register } from "../actions/usersAction";
import '../style/form.css'

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [address, setaddress] = useState("");
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(Register(name, email, password, address));
    }
  };

  return (
    <div className='myformreg'>
    <FormContainer>
      <Form className='myform  sub' onSubmit={submitHandler}>

      <h2>Sign Up</h2>
      <br />
      {message && <Message variant="danger">{message}</Message>}
      {error && (
        <Message variant="danger">
          <i className="fa fa-exclamation-triangle"></i> Fill all the field in Form or Check if you have already have account
        </Message>
      )}
      {loading && <Loader />}
      
        <Form.Group aria-required controlId="name">
          {/* <Form.Label className="formlabel"></Form.Label> */}
          <div className="input-container">
    <i className="fa fa-user icon"></i>
          <Form.Control
            className="formcontrol"
            type="name"
            placeholder="Enter name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control></div>
        </Form.Group> 

        <Form.Group controlId="email">
          {/* <Form.Label></Form.Label> */}
          <div className="input-container">
    <i className="fa fa-envelope icon"></i>
          <Form.Control
          className="formcontrol"
            type="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control></div>
        </Form.Group>

        <Form.Group className="form1" controlId="password">
          {/* <Form.Label></Form.Label> */}
          <div className="input-container">
    <i className="fa fa-key icon"></i>
          <Form.Control
          className="formcontrol"
            type="password"
            placeholder="Enter password"
            value={password}
            required
            minLength='8'
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control></div>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          {/* <Form.Label></Form.Label> */}
          <div className="input-container">
    <i className="fa fa-key icon"></i>
          <Form.Control
          className="formcontrol"
            type="password"
            placeholder="Confirm password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control></div>
        </Form.Group>

        <Form.Group controlId="address">
          {/* <Form.Label></Form.Label> */}
          <div className="input-container">
    <i className="fa fa-home icon"></i>
          <Form.Control
          className="formcontrol"
            type="address"
            placeholder="Enter the address"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          ></Form.Control></div>
        </Form.Group>

        <Button className='mybtnreg' type="submit" variant="primary">
          Register
        </Button>
     

      <Row className="py-3">
        <Col>
          Have an Account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </Col>
      </Row>
      </Form>
    </FormContainer>
    </div>
  );
};

export default RegisterScreen;
