import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Message from "./../components/Message";
import Loader from "./../components/Loader";
import { login } from "./../actions/usersAction";
import FormContainer from "./../components/FormContainer";
import Meta from "./../components/Meta";
import '../style/form.css'

function LoginScreen({ location, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo && userInfo.token) {
      history.push(redirect);
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      <Meta title="Login" />
      <FormContainer>
      <Form className='myform sub' onSubmit={submitHandler}>
        <h2>Login</h2>
        {error && (
          <Message variant="danger">
           <i class="fa fa-exclamation-triangle"></i> Please fill all the fields or Check your email and password
          </Message>
        )}
        {loading && <Loader />}
        
          <Form.Group controlId="email">
            {/* <Form.Label></Form.Label> */}
            <div class="input-container">
    <i class="fa fa-envelope icon"></i>
            <Form.Control
            className="formcontrol"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control></div>
          </Form.Group>
          <Form.Group controlId="password">
            {/* <Form.Label></Form.Label> */}
            <div class="input-container">
    <i class="fa fa-key icon"></i>
            <Form.Control
              className="formcontrol"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control></div>
          </Form.Group>

          <Button className='btn-primary' type="submit">
            Sign In
          </Button>
        
        <Row className="py-3">
          <Col>
            New to Yuthies Aari?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Register
            </Link>
          </Col>
        </Row>
        </Form>
      </FormContainer>
    </>
  );
}

export default LoginScreen;
