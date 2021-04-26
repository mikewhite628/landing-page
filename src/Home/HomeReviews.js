import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Button, Col, Jumbotron} from 'react-bootstrap'
import review1 from '../images/review1.png'
import review2 from '../images/review2.png'

function HomeReviews () {
  return (
    <Carousel fade >    
        
        <Carousel.Item>
        <img src={review2} className='d-block w-100' />
            <Carousel.Caption>
            <h3>Review here</h3>
            </Carousel.Caption>
            
        </Carousel.Item>

        <Carousel.Item>
        <img src={review1} className='d-block w-100' />
            <Carousel.Caption>
            </Carousel.Caption>
            
        </Carousel.Item>

    </Carousel>

  );
}

export default HomeReviews