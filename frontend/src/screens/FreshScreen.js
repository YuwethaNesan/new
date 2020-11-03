import ProductCarousel from '../components/ProductCarousel'
import Image from "react-router-bootstrap";
import React from 'react'
import About from '../components/home/about';
import Talk from '../components/home/talk';
import Work from '../components/home/work';
import Features from '../components/home/feature';


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
        <br/>
        <br/>

        <h3 className='text-center'>What does our clients says</h3>
    
        <p className='text-center'>Ask them by touch their Photos</p>
        <br />
        <Talk />

    </div>
    </section>
    <section>
    <div>
    <h3 className='text-center'>Features</h3>
<Features />
    </div>
    </section>
        </> 
    )
}

export default FreshScreen;

