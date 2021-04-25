import React, { useState, useEffect } from 'react'
import { Col, Row, Button, Modal, Form} from 'react-bootstrap'



function ContactModal({requestService, setRequestService, ...restProps }) {


  return (
    <Modal
    {...restProps}
    size='lg'
    aria-labelledby='contained-modal-title-vcenter'
    centered
    animation={false}
    >
        <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
            <img src='https://picsum.photos/200/100' />  
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>For Immidiate Service Call: 555-555-5555</div>
            <Form>

                <Form.Group controlId='formGroupName'>
                    <Form.Label>Name (required) </Form.Label>
                    <Form.Control type='text' placeholder='John Doe'></Form.Control>
                </Form.Group>

                <Form.Group controlId='formGroupPhone'>
                    <Form.Label>Phone Number (required) </Form.Label>
                    <Form.Control type='text' placeholder='555-555-5555'></Form.Control>
                </Form.Group>

                <Form.Group controlId='formGroupEmail'>
                    <Form.Label>Email(required) </Form.Label>
                    <Form.Control type='email' placeholder='JohnDoe@email.com'></Form.Control>
                </Form.Group>

                <Form.Group controlId='FormGroupTextArea'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as='textarea' rows={3} />
                </Form.Group>

            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => setRequestService(false)}>Close</Button>
        </Modal.Footer>
    </Modal>

  );
}

export default ContactModal;
