import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Button, Col, Container,} from 'react-bootstrap'
import HomeCarousel from './HomeCarousel';
import HomeInfo from './HomeInfo'
import HomeCallToAction from './HomeCallToAction'
import HomeReviews from './HomeReviews'

function Home({requestService, setRequestService}) {

  return (
    <Container fluid style={{paddingLeft:'0', paddingRight:'0'}}>
    <HomeCarousel />
    <HomeInfo />
    <HomeCallToAction 
    requestService={requestService}
    setRequestService={setRequestService}
    />
    <HomeReviews />
    </Container>
  );
}

export default Home