import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Button, Col, Jumbotron, Card, Row, Container} from 'react-bootstrap'
import AboutUsGreeting from './AboutUsGreeting'
import AboutUsInfo from './AboutUsInfo'

function AboutUs () {
  return (
  <Container fluid style={{paddingLeft:'0', paddingRight:'0'}}>
    <AboutUsGreeting />
    <AboutUsInfo />
  </Container>

  )
}

export default AboutUs