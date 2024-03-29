import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "./../actions/productAction";
import '../style/top.css'
const TopProduct = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel id='myCarousel' pause="hover" className="carousel slide">
      {products.map((product) => (
        <Carousel.Item className='carousel-inner thumb-wrapper' key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
       
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TopProduct;