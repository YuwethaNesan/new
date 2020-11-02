import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-router-bootstrap";
import '../../style/about.css'




function About() {
  return (
      <>
 
    <section id="about-us" className="responsive about-us">
    <div className="container" data-aos="fade-up">
      <div className="row content fo">
        <div className="col-lg-6" >
          <h2>Who We Are</h2>
          <h5>Match Our Designs With Your Desires</h5>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 about-us" data-aos="fade-left">
          <p>
           yuthies Aari is one of the leading Aari designing Website in Sri Lanka since 2020. We provide 100% quality designs and Embroderies For you in your budget
          </p>
          <ul>
            <li><i className="ri-check-double-line"></i> Unique designs</li>
            <li><i className="ri-check-double-line"></i> Perfect Embroidery works</li>
            <li><i className="ri-check-double-line"></i> Door step meterial collecting and delivery</li>
          </ul>
          <p>
         You can get full customizable designs and complete embroidery work with order tracking.You can contact our customer service at anytime for clarifications.
          </p>
        </div>
      </div>

    </div>
  </section>
  
  </>
  );
}

export default About;
