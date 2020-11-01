// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Carousel, Image } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "./Loader";
// import Message from "./Message";
// import { listTopProducts } from "./../actions/productAction";

// const ProductCarousel = () => {
//   const dispatch = useDispatch();

//   const productTopRated = useSelector((state) => state.productTopRated);
//   const { loading, error, products } = productTopRated;

//   useEffect(() => {
//     dispatch(listTopProducts());
//   }, [dispatch]);

//   return loading ? (
//     <Loader />
//   ) : error ? (
//     <Message variant="danger">{error}</Message>
//   ) : (
//     <Carousel pause="hover" className="bg-dark">
//       {products.map((product) => (
//         <Carousel.Item key={product._id}>
//           <Link to={`/product/${product._id}`}>
//             <Image src={product.image} alt={product.name} fluid />
//             <Carousel.Caption className="carousel-caption">
//               <h2>
//                 {product.name} (${product.price})
//               </h2>
//               <p>{product.description}</p>
//             </Carousel.Caption>
//           </Link>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default ProductCarousel;
import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import img1 from '../images/productcarousel1.png'
import img2 from '../images/productcarousel2.png'
import img3 from '../images/productcarousel3.png'

 function ProductCarousel() {
   return (
     
       <Carousel>
               
                
                    <img src={img2} />
                
                
                    <img src={img3} />
                
                
                    
                
                
                    <img src={img2} />
                
                
                    <img src={img3} />
                
                
          
                    <img src={img3} />
                
                
                    
                    <img src={img2} />
                
                
                <img src={img3} />
            
            
                
            
            
                <img src={img2} />
            
            
                <img src={img3} />
            
            
      
                <img src={img3} />
            
            
                
            
            
                <img src={img2} />
            
            
                <img src={img3} />
            
                
                    <img src={img2} />
                
                
                    <img src={img3} />
                
            </Carousel>
     
   )
 }
 
 export default ProductCarousel
 