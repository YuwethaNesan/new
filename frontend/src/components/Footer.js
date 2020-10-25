import React  from "react";
import { Container, Row, Col, Button,Image } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Logo from "../yuthiesaariPNG-01.png"
import Logo from '../../src/images/yuthies logo.png';
import '../style/footer.css'


function Footer() {
  return (
    <footer className="page-footer font-small" id='footer'>
    <div>
    <div className="row text-center d-flex  pt-5 ">
  
    
        <div className="col-md-3">
          <h5>
            <Link to="/terms">Terms & Conditions</Link>
          </h5>
        </div>

  
  
        <div className="col-md-3">
          <h5>
            <Link to="/privacy">Privacy Policy</Link>
          </h5>
        </div>
     
  
       
        <div className="col-md-3">
          <h5>
            <Link to="/disclimer">Disclimer</Link>
          </h5>
        </div>
       
        <div className="col-md-3">
          <h5>
            <Link to="#!">Door Step Service</Link>
          </h5>
        </div>
        
  
      </div>
      
   <Row> 
     <Col className='container p col-5'>
      <hr className="rgba-white-light"  />

      <div className="foot text-justify justify-content-left">
        <div>
          <Image className='text-center logo' src={Logo} alt='website logo' /><br />
          We are one of the leading Aari Designing in Sri Lanka since 2020.
          We can provide perfect designs and perfect embro1deries with material collecting 
          and delivery Service. You can order any kind of aari designs such as glitters, threds etc.
          We provide 24 hours service also.Please follow us on social medias.
          {/* <Button className='btn-primary btn envelope'><i className='fa fa-envelope' href='yuthiesdesigners10@gmail.com'></i></Button> */}
        </div>
        </div>
        </Col>
        
        <Col className='col-6 container'>
      <hr className="rgba-white-light"  />
      <br/>
      <br/>
          
          <div className="col-10 text-right">
            <Link className="fb-ic social">
              <i className="fa fa-facebook-f fa-lg white-text mr-4"> </i>
            </Link>
       
            <Link className="tw-ic social">
              <i className="fa fa-twitter fa-lg white-text mr-4"> </i>
            </Link>

            <Link className="ins-ic social">
              <i className="fa fa-instagram fa-lg white-text mr-4"> </i>
            </Link>
        
            <Link className="pin-ic social">
              <i className="fa fa-pinterest fa-lg white-text mr-4"> </i>
            </Link>
  
          </div>
      <hr className="rgba-white-light"  />

          <div className="text-right col-10 contact">
          <p>+94767703654  <i className="text-right fa fa-phone fa-lg white-text  mr-4" aria-hidden="true"></i><br />
          
          yuthiesdesigners10@gmail.com  <i className="text-right fa fa-envelope fa-lg white-text mr-4"></i><br />
       
          No.27,Kokuvil East,
              Kokuvil   <i className="text-right fa fa-address-card fa-lg white-text mr-4"></i></p>

        
           
  
          </div>
          </Col>
          </Row>
    </div>
    
  <hr />
    <div className="footer-copyright text-center py-3">© 2020 Copyright:
      <Link to="https://www.facebook.com/YuthiesDeisigners/"> Yuthies Designers</Link>
    </div>

  </footer>


    
  );
}

export default Footer;
