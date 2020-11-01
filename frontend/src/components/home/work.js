import React from 'react'
import { Container, Row, Col,Button,Image } from "react-bootstrap";
import FreshScreen from '../../screens/FreshScreen';
import '../../style/work.css'
import Workflow from '../../images/workflow.png'
function Work() {
    return (
     <>
     <div className='work'><img src={Workflow} fluid/></div>
     
     </>
    )
}

export default Work
