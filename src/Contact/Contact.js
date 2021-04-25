import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Button, Col, Jumbotron, Card, Row, Container} from 'react-bootstrap'

function Contact () {
  return (
  <Container fluid style={{paddingLeft:'0', paddingRight:'0'}}>
    <Jumbotron className={'mt-5'} style={{backgroundImage:'url(https://picsum.photos/900/500)', backgroundSize:'cover', color:'white', height: '60vh'}}>
                <h3>Contact us blah</h3>
                <p>Premium blah blah blah here about how good we are</p>
               
    </Jumbotron>
    <div style={{textAlign:'center'}}>Company Name</div>
    <Row className={'mb-3'}>
      <Col xs={9}>
      <Card>
       <Card.Title> Location</Card.Title>
       <Card.Body>
       Phone Number
       Servicing area
       </Card.Body>
   </Card>
      </Col>
    </Row>
    
    <Row className={'mb-3 mt-3'}>
      <Col xs={9}>
      <Card>
      <Card.Title>Hours of Operation</Card.Title>
       <Card.Body>
       Schedule
       schedule
       schedule 
       etc...
       </Card.Body>
   </Card>
    </Col>
    </Row>

    <Row className={'mb-3 mt-3'}>
      <Col xs={9}>
      <Card>
      <Card.Title>Another About Us</Card.Title>
       <Card.Body>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type 
       specimen book.
       </Card.Body>
   </Card>
      </Col>
    </Row>
    <div style={{textAlign:'center'}}>Fancy We Guarantee It</div>
  </Container>

  )
}

export default Contact