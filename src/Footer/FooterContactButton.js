import React, { useState, useEffect } from 'react'
import useWindowDimensions from './useWindowDimensions'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Col, Row, ListGroup} from 'react-bootstrap'

function FooterContactButton({setRequestService}) {

  const { height, width } = useWindowDimensions()
  return (
    <div>
    <Row className={'justify-content-md-center'}>
    <Col xs lg='2'>
    {
    width > 634 ? <Button onClick={() => setRequestService(true)} className={'fixed-bottom mb-1 box-shadow'}> Request Service </Button> 
    : 
    <div fluid className={'fixed-bottom'} style={{backgroundColor: '#212529', height:'12vh', width:'100vw', color:'#fff', paddingLeft:'15px', paddingRight:'30px', fontSize:'30px'}}> 
    <div style={{textAlign:'center', width:'100%'}}>Phone Icon | 555-555-5555</div>
    <Button  variant='danger' block>CLICK TO CALL FOR LIVE RESPONSE</Button>
    </div>
    }
    </Col>
    </Row>
    </div>
  );
}

export default FooterContactButton