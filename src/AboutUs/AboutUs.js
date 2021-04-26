import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Button, Col, Jumbotron, Card, Row, Container} from 'react-bootstrap'

function AboutUs () {
  return (
  <Container fluid style={{paddingLeft:'0', paddingRight:'0'}}>
   <Card style={{color:'#fff'}} className={'text-center mt-5'}>
   <div className={'transparent-cover'}></div>
   <Card.Img src={'https://picsum.photos/1300/600'} alt='card image' />
   <Card.ImgOverlay className={'mt-3 ontop-transparent'}>
                <h3>First slide label</h3>
                <p>Premium blah blah blah here about how good we are</p>
    </Card.ImgOverlay>
               
    </Card>
    <Row className={'mb-3 mt-3'}>
      <Col xs={12}>
      <Card border='0'>
       <Card.Title style={{textAlign:'center', fontSize:'40px'}}> What is Lorem Ipsum? center this </Card.Title>
       <Card.Body>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type 
       specimen book.
       </Card.Body>
   </Card>
      </Col>
    </Row>
    <div style={{textAlign:'center', fontSize:'40px'}}>Excellent Service</div>
    <Row className={'mb-3 mt-3'}>
      <Col xs={9}>
      <Card border='0'>
       <Card.Body>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type 
       specimen book.
       </Card.Body>
   </Card>
      </Col>
      <Col xs={3}>
      <Card>
       <Card.Img src='https://picsum.photos/300/300' className={'box-shadow'} />
   </Card>
      </Col>
    </Row>
    <div style={{textAlign:'center', fontSize:'40px'}}>Our Mission</div>
    <Row className={'mb-3 mt-3'}>
      <Col xs={9}>
      <Card border='0'>
       <Card.Body>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type 
       specimen book.
       </Card.Body>
   </Card>
      </Col>
      <Col xs={3}>
      <Card>
       <Card.Img src='https://picsum.photos/300/301' className={'box-shadow'} />
   </Card>
      </Col>
    </Row>
    <div style={{textAlign:'center', fontSize:'40px'}}>Fancy We Guarantee It</div>
  </Container>

  )
}

export default AboutUs