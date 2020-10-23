import React, { useEffect } from "react";
//import products from "./../products";
import { Col, Row } from "react-bootstrap";
import Product from "./../components/Product";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./../actions/productAction";
import Loader from "./../components/Loader";
import Message from "./../components/Message";
import Paginate from "./../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "./../components/Meta";
import { Link } from "react-router-dom";
import '../style/home.css'
function HomeScreen({ match }) {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products, pages, page } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
    <br />
    <br />

  
        <Link to="/" className="btn-primary">
          Go Back
        </Link>
        <Row>
        <aside className='col-2 sections'>
     <div >
       <br />
       <h3>Categories</h3>
      <div>
      <Link to='/search/Sketches' className='shop'>Sketches</Link>
      </div>
      <div>
      <Link to='/search/Portfolio' className='shop'>Portfolios</Link>
      </div>

     </div>
     </aside>
     
     <div className=''>
      <h2 className='key text-center'>{keyword}</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={4} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            page={page}
            pages={pages}
            keyword={keyword && keyword ? keyword : ""}
          />
          
        </>
      )}
      </div>
      </Row>
    </>
  );
}

export default HomeScreen;
