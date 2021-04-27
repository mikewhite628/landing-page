 import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Col, Row, ListGroup, Container} from 'react-bootstrap'

function Faqs() {
  return (
    <Container className={'mt-3'}fluid >
    <Row>
        <Col>
        <div className={'mt-5'} style={{fontSize:'40px', textAlign:'center', fontFamily:'Antonio'}}>Frequently Asked Questions</div>
        </Col>
    </Row>

    <Row>
    <Col md={8}className={'mb-3'}>
        <Card className={'mb-3 box-shadow'} border='primary'>
                <Card.Title>Question</Card.Title>
                <Card.Body>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </Card.Body>
        </Card>

        <Card className={'mb-3 box-shadow'} border='primary'>
                <Card.Title>Question</Card.Title>
                <Card.Body>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </Card.Body>
        </Card>

        <Card className={'mb-3 box-shadow'} border='primary'>
                <Card.Title>Question</Card.Title>
                <Card.Body>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </Card.Body>
        </Card>
    </Col>


<Col md={4}>
    <Card className={'text-center box-shadow mb-3'} bg='primary'>
    <Card.Header style={{color:'white'}}> Other Services </Card.Header>
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

export default Faqs