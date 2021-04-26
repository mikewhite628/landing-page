import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Col, Row, Container, ListGroup} from 'react-bootstrap'
import logo from '../../src/images/Fortbend2.png'
import scotchgard from '../../src/images/scotchgard.svg'
import fb from '../images/fb.svg'

function Footer() {
  return (
    <Container fluid style={{backgroundColor:'#d7d7d7', color:'#fff'}} >
    <Row>
     <Col className={'mt-3'}><img src={logo} className={'box-shadow'}/></Col>
     <Col className={'mt-3'} style={{paddingLeft:'0px', paddingRight:'0px'}}>
        <Card.Img src={fb} style={{height:'80px', width:'80px'}} className={'box-shadow'}/>     
    </Col> 
    <Col className={'mt-3'}>
    <Card.Img src={scotchgard} style={{height:'80px', width:'80px'}} className={'box-shadow'}/>
    </Col>
    </Row>
    <Row className={'mt-3 mb-5'}>
        <Col>
            <Card className={'text-center box-shadow'} style={{color:'#212529'}}>
                <Card.Title>
                    Location
                </Card.Title>
                <Card.Body>
                    Proudly serving xxxx and the greater xxxx area!
                </Card.Body>
            </Card>
            <Card className={'text-center mt-3 box-shadow'} style={{color:'#212529'}}>
                <Card.Body>
                   Map of service area here!!
                </Card.Body>
            </Card>
        </Col>
        <Col xs={5}>
            <Card className={'text-center box-shadow'} style={{color:'#212529'}}>
                <Card.Title> Schedule </Card.Title>
                <ListGroup.Item>Monday - Sunday</ListGroup.Item>
                <ListGroup.Item>8am - 8pm</ListGroup.Item>
            </Card>
        
        </Col>

    </Row>
    <Row>
        <Col>My Logo</Col>
        <Col>Copyright symbol 2021</Col>
    </Row>
   </Container>
  );
}

export default Footer