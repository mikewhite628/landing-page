import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Button, Col, Jumbotron, Card, Row, Container} from 'react-bootstrap'

function Contact () {
  return (
  <Container fluid style={{paddingLeft:'0', paddingRight:'0'}}>
    <Card style={{color:'#fff'}} className={'text-center mt-5'}>
   <div className={'transparent-cover'}></div>
   <Card.Img src={'https://picsum.photos/1300/601'} alt='card image' />
   <Card.ImgOverlay className={'mt-3 ontop-transparent'}>
                <h3>Contact Us</h3>
    </Card.ImgOverlay>
               
    </Card>
    <div style={{textAlign:'center', fontSize:'40px'}}>Company Name</div>
    <Row className={'mb-3 mt-3'}>
      <Col xs={12}>
      <Card style={{textAlign:'center'}} border='0'>
       <Card.Title > Location</Card.Title>
       <Card.Body>
       Phone Number
       Servicing area
       </Card.Body>

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
      <Col xs={12}>
      <Card border='0'>
      <Card.Title style={{textAlign:'center'}}>Another About Us</Card.Title>
       <Card.Body>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type 
       specimen book.
       </Card.Body>
   </Card>
      </Col>
    </Row>
    <div style={{textAlign:'center', fontSize:'40px'}}>Fancy We Guarantee It</div>
  </Container>

  )
}

export default Contact