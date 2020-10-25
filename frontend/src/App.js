import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreeen from "./screens/ProductScreeen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreeen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceorderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import FreshScreen from "./screens/FreshScreen";
import Terms from "./components/home/terms";
import Privacy from "./components/home/Privacy";
import Disclimer from "./components/home/disclimer";
import Adminscreen from './screens/Adminscreen'


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route exact path="/shipping" component={ShippingScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/payment" component={PaymentScreen} />
          <Route exact path="/placeorder" component={PlaceOrderScreen} />
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/" component={FreshScreen} />

          <Route exact path="/profile" component={ProfileScreen} />
          <Route exact path="/product/:id" component={ProductScreeen} />
          <Route exact path="/cart/:id?" component={CartScreen} />
          <Route exact path="/admin/userlist" component={UserListScreen} />
          <Route path="/search/:keyword" component={HomeScreen} exact />
          <Route path="/page/:pageNumber" component={HomeScreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            exact
          />
          <Route
            exact
            path="/admin/productlist"
            component={ProductListScreen}
          />
          <Route exact path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route exact path="/admin/orderlist" component={OrderListScreen} />

          <Route
            exact
            path="/admin/product/:id/edit"
            component={ProductEditScreen}
          />

          {/* policies */}
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/disclimer" component={Disclimer} />

          {/* admin */}
          <Route exact path="/admin" component={Adminscreen} />


          
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
