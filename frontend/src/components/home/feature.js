
import React from 'react'
import { Container, Row, Col,Button,Image } from "react-bootstrap";
import FreshScreen from '../../screens/FreshScreen';
import '../../style/feature.css'
import Features1 from '../../images/features.png'
import Features2 from '../../images/features1.png'
import Features3 from '../../images/features2.png'


function Features() {
    return (
     <>
     <div className='feature nav'>
     <div className='features'><img src={Features1} fluid/></div>
     <div className='features'><img src={Features2} fluid/></div>
     <div className='features'><img src={Features3} fluid/></div>
     </div>

     
     </>
    )
}

export default Features
