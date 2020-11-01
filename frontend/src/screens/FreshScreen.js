import ProductCarousel from '../components/ProductCarousel'
import Image from "react-router-bootstrap";
import React from 'react'
import About from '../components/home/about';
import Talk from '../components/home/talk';
import Work from '../components/home/work';

function FreshScreen() {
    return (
        <>
    <div className='myhome'>

    </div>
    
    <div>
        <About />
    </div>
  <Work />
    <section>
    <div>
    <br />
    <br />

        <h3 className='text-center'>What does our clients says</h3>
        <br />
        <p className='text-center'>Ask them by touch their Photos</p>
        <br />

        <br />

        <Talk />
    </div>
    </section>
    <section>
    <div>
    <h3 className='text-center'>Our Team</h3>

    </div>
    </section>
        </> 
    )
}

export default FreshScreen;

