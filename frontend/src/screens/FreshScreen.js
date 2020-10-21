import ProductCarousel from '../components/ProductCarousel'
import Image from "react-router-bootstrap";
import React from 'react'
import About from '../components/home/about';
import Talk from '../components/home/talk';
import Work from '../components/home/work';

function FreshScreen() {
    return (
        <>
    <div className='myhome responsive'>
        <p>Yuthies Aari</p>
    </div>
    <section>
    <div>
        <About />
    </div>
    </section>
    <section>
    <div>
        <Talk />
    </div>
    </section>
    <section>
    <div>
        <Work />
    </div>
    </section>
        </> 
    )
}

export default FreshScreen;

