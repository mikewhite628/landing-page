import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Carousel, Button, Col, Jumbotron, Card, Row, Container} from 'react-bootstrap'
import cleanstroke2 from '../images/cleanstroke2.jpg'
import widefloor from '../images/widefloor.jpg'


function HomeCallToAction ({requestService, setRequestService}) {
  return (
    <Container fluid style={{paddingLeft:'0', paddingRight:'0'}} className={'box-shadow'}>
   <Card style={{color:'#fff'}} className={'text-center'}>
   <div className={'transparent-cover'}></div>
                <Card.Img src={widefloor} alt='card image' className={'img-fluid'} style={{height:'300px'}}/>
                <Card.ImgOverlay className={'mt-3 ontop-transparent'}>
                <h3 style={{fontSize: '35px'}}>Call now to schedule your appointment!</h3>
                <p>Offering quality service to you and yours! Book your appointment now and enjoy a life of clean carpets and clean living</p>
                <Row>
                  <Col xs={6}>
                <Button className={'mr-3'}>Call: 555-555-5555</Button>
                  </Col>
                  <Col xs={6}>
                <Button onClick={() => setRequestService(true)}>Request Service</Button>
                  </Col>
                </Row>
                </Card.ImgOverlay>
                </Card>
                <Card style={{textAlign:'center'}} border='0'>
                  <Card.Title style={{fontSize:'35px'}}>Your Satifaction Guarenteed!</Card.Title>
                </Card>
                </Container>
  )
}

export default HomeCallToAction