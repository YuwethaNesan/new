import React from "react";
import Rating from "./Rating";
import { Button, Card,ListGroup,ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../style/product.css'
function Product({ product }) {
  return (
    <Card border="black" className="productsub col-3 my-3 p-3 rounded">
    <Card.Img className='cardimg' src={product.image} variant="top" />
  <Link to={`/product/${product._id}`}>
  <Button className='btn-primary mybtncart'>View More</Button>
  </Link>
  
  <Card.Body className='cardbody'>
<ListGroup className="list-group-flush">
<ListGroupItem> 
  <Link to={`/product/${product._id}`}>
      <Card.Title as="div">
        <strong>{product.name}</strong>
      </Card.Title>
  </Link>
</ListGroupItem>
<ListGroupItem> 
      <Rating
        value={product.rating}
        text={`${product.numReviews} Reviews`}
      />
</ListGroupItem>
<ListGroupItem>
  <Card.Text as="h6">Rs {product.price}</Card.Text>
</ListGroupItem>
</ListGroup>
</Card.Body>
</Card>
  );
}

export default Product;
