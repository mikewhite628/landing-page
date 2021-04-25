import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Col, Row, ListGroup, Container} from 'react-bootstrap'

function Specials() {
  return (
    <Container className={'mt-3'}fluid style={{paddingLeft:'0', paddingRight:'0'}}>
    <Row>
        <Col>
        <div className={'mt-5'} style={{textAlign:'center'}}>We are pleased to offer the following specials</div>
        </Col>
    </Row>

    <Row>
    <Col md={8}className={'mb-3'}>
        <Card className={'mb-3'}>
                <Card.Img src='https://picsum.photos/500/150' />
        </Card>

    <Card className={'mb-3'}>
                <Card.Img src='https://picsum.photos/500/151' />
        </Card>

        <Card className={'mb-3'}>
                <Card.Img src='https://picsum.photos/500/149' />
        </Card>
    </Col>


<Col md={4} style={{padding:'0'}}>
    <Card>
    <Card.Header> Other Services </Card.Header>
    <ListGroup variant='flush'>
   <ListGroup.Item>Service 1</ListGroup.Item>  
   <ListGroup.Item>Service 2</ListGroup.Item>  
   <ListGroup.Item>Service 3</ListGroup.Item>  
   <ListGroup.Item>Service 4</ListGroup.Item>  
   <ListGroup.Item>Service 5</ListGroup.Item>  
   <ListGroup.Item>Service 6</ListGroup.Item>  
   <ListGroup.Item>Service 7</ListGroup.Item>  
   </ListGroup>
    </Card>
</Col>

</Row>
    
   </Container>
  );
}

export default Specials