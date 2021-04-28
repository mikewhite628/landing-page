import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import cleanroom from '../images/cleanroom.jpg'
import kids from '../images/kids.jpg'
import half from '../images/half.jpg'
import dogfloor from '../images/dogfloor.jpg'
import officefloor from '../images/officefloor.jpg'

import { Carousel, Button, Col} from 'react-bootstrap'

function HomeCarousel () {
  return (
    <Carousel fade>
        <Carousel.Item>
        <div className={'transparent-cover'}></div>
            <img
                className='d-block w-100'
                src={cleanroom}
                alt='First Slide'

                />
            <Carousel.Caption>
                <h3 style={{fontSize:'80px', textAlign:'center', fontFamily:'Antonio'}}>First slide label</h3>
                <p>Premium blah blah blah here about how good we are</p>
            </Carousel.Caption>
            
        </Carousel.Item>

        <Carousel.Item>
        <div className={'transparent-cover'}></div>
            <img
                className='d-block w-100'
                src={dogfloor}
                alt='First Slide'
                />
            <Carousel.Caption>
                <h3 style={{fontSize:'80px', textAlign:'center', fontFamily:'Antonio'}}>Second slide label</h3>
                <p>Premium blah blah blah here about how good we are</p>
            </Carousel.Caption>
            
        </Carousel.Item>

        <Carousel.Item>
        <div className={'transparent-cover'}></div>
            <img
                className='d-block w-100'
                src={officefloor}
                alt='First Slide'
                />
            <Carousel.Caption>
                <h3 style={{fontSize:'80px', textAlign:'center', fontFamily:'Antonio'}}>Third slide label</h3>
                <p>Premium blah blah blah here about how good we are</p>
            </Carousel.Caption>
            
        </Carousel.Item>
    </Carousel>
    
    
  );
}

export default HomeCarousel