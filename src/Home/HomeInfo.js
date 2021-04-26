import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Col, Row, ListGroup, Container} from 'react-bootstrap'
import kids from '../images/kids.jpg'
import dogcouch from '../images/dogcouch.jpg'
import couch2 from '../images/couch2.jpg'
import commercial from '../images/commercial.jpg'
import half from '../images/half.jpg'

function HomeInfo() {
  return (
    <Container fluid >
    <Row className={'mb-3 mt-3'}>
    <Col sm={6}>
   <Card border='0'>
       <Card.Title style={{fontSize:'30px', textAlign:'center', fontFamily:'Antonio'}}> What is Lorem Ipsum?</Card.Title>
       <Card.Body>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type 
       specimen book.
       </Card.Body>
   </Card>
   </Col>

    <Col sm={6} >
   <Card>
       <Card.Img src={kids} className={'box-shadow'}/>
   </Card>
   </Col>
   </Row>
 
   <Card  border='0' >
                  <Card.Title style={{fontSize:'45px', textAlign:'center', fontFamily:'Antonio'}}>More Specialty Services</Card.Title>
     </Card>

   <Row>
    <Col xm={6}className={'mb-3'}>
        <Card bg='dark' className={'text-center mb-3 mouse-over-effect box-shadow'} text='white' border='0'>
                <Card.Img src={half}/>
                <Card.Title className={'mt-2'}> Carpet Cleaning </Card.Title>
        </Card>

        <Card bg='dark' className={'text-center mt-3 mouse-over-effect box-shadow'} text='white' border='0'>
                <Card.Img src={dogcouch} />
                <Card.Title className={'mt-2'} style={{fontSize:'17.5px'}}>  Pet Ordor & Stain Removal </Card.Title>
        </Card>
    </Col>

    <Col xm={6}>
    <Card bg='dark' className={'text-center mb-3 mouse-over-effect box-shadow'} text='white' border='0'>
                <Card.Img src={couch2} />
                <Card.Title className={'mt-2'}> Couches </Card.Title>
        </Card>
        <Card bg='dark' className={'text-center mb-3 mouse-over-effect box-shadow'} text='white' border='0'>
                <Card.Img src={commercial} />
                <Card.Title className={'mt-2'}> Commercial</Card.Title>
        </Card>
    </Col>

    <Col md={4}>
        <Card className={'text-center box-shadow mb-3'} bg='primary' >
        <Card.Header style={{color: 'white'}}> Other Services </Card.Header>
        <ListGroup variant='flush'>
       <ListGroup.Item className={'mouse-over-effect'}>Service 1</ListGroup.Item>  
       <ListGroup.Item className={'mouse-over-effect'}>Service 2</ListGroup.Item>  
       <ListGroup.Item className={'mouse-over-effect'}>Service 3</ListGroup.Item>  
       <ListGroup.Item className={'mouse-over-effect'}>Service 4</ListGroup.Item>  
       </ListGroup>
        </Card>
    </Col>

   </Row>
   </Container>
  );
}

export default HomeInfo