import React from "react";
import { Nav, Container, Navbar, NavDropdown, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/usersAction";
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';

import { Route } from "react-router-dom";
// import SearchBox from "./Searchbox";

function Header() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div>
      <header>
        <Navbar className='myhead' expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
            <Navbar.Brand>
              <Image className='logo' src={Logo} alt='website logo' />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='myhead-toggler' />
            <Navbar.Collapse id="basic-navbar-nav" className='myhead-toggler-collapsed'>
              {/* <Route
                render={({ history }) => <SearchBox history={history} />}
              /> */}
              <Nav className="ml-auto">
              {!userInfo && (
                 <>
                   
                  <LinkContainer to="/login">
                    <Link className="Header__Nav__Icons">
                      <i className="fa fa-user Header__Nav__Icons"></i> Sign In
                    </Link>
                  </LinkContainer>
              
                </>
               )}
              {userInfo && userInfo.token && !userInfo.isAdmin && (
                  <>
                   
                    <NavDropdown title={<i className="fa fa-shop">Shop Now!</i>} id="productmenu">
                    <LinkContainer className='shop' to="/search/Sketches">
                        <NavDropdown.Item  className='shop1'>New!</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/search/Portfolio">
                        <NavDropdown.Item  className='shop1'>Portfolio</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  <LinkContainer to="/">
                    <Nav.Link className="Header__Nav__Icons">
                      <i className="fa fa-home"></i>
                    </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cart">
                    <Nav.Link>
                    <i className="fa fa-shopping-bag"></i>
                    </Nav.Link>
                    </LinkContainer>
                
                    <NavDropdown className='shop' title={<i className="fa fa-user"></i>} id="username">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>
                        {userInfo.name}'s Profile
                        </NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
             
                )}


                {userInfo && userInfo.isAdmin && (
                  <>
                    <NavDropdown title={`Admin`} id="adminmenu">
                      <LinkContainer to="/admin/userlist">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/productlist">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orderlist">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
