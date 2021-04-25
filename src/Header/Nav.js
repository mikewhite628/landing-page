import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Container} from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Link,
  NavLink
} from 'react-router-dom'
import Home from '../Home/Home'
import AboutUs from '../AboutUs/AboutUs'

function HeaderNav () {
  return (
    <Container>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' fixed='top'>
        <NavLink to='/'><Navbar.Brand>Logo Here</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
            <Nav.Link>About Us</Nav.Link>
                <Nav.Link><Link to='/about'>About Us</Link></Nav.Link>
                <Nav.Link>Specials</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
                <Nav.Link>FAQ</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link eventKey={2} href='phone'> 555-555-5555 </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Container>

  );
}

export default HeaderNav