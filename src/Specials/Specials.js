import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Col, Row, ListGroup, Container} from 'react-bootstrap'

function Specials() {
  return (
    <Container className={'mt-3'}fluid >
    <Row>
        <Col>
        <div className={'mt-5'} style={{fontSize:'45px', textAlign:'center', fontFamily:'Antonio'}}>We are pleased to offer the following specials</div>
        </Col>
    </Row>

    <Row>
    <Col md={8}className={'mb-3'}>
        <Card className={'mb-3'}>
                <Card.Img src='https://picsum.photos/500/150' className={'box-shadow'}/>
        </Card>

    <Card className={'mb-3'}>
                <Card.Img src='https://picsum.photos/500/151' className={'box-shadow'}/>
        </Card>

        <Card className={'mb-3'}>
                <Card.Img src='https://picsum.photos/500/149' className={'box-shadow'}/>
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

export default Specials