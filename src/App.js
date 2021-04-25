import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import { Col, Row, Container, Nav, Navbar,} from 'react-bootstrap'
import FooterContactButton from './Footer/FooterContactButton';
import ContactModal from './ContactModal/ContactModal';
import AboutUs from './AboutUs/AboutUs';
import logo from '../src/images/Fortbend2.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import Specials from './Specials/Specials';
import Contact from './Contact/Contact';
import Faqs from './Faqs/Faqs';


function App() {

  const [ requestService, setRequestService ] = useState(false)

  return (
    <Router>
    <Container fluid style={{paddingLeft:'0', paddingRight:'0'}}>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' fixed='top' style={{padding:'0'}}>
        <NavLink to='/'><Navbar.Brand><img img src={logo} /></Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
               <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/about'>About Us</Nav.Link>
                <Nav.Link as={Link} to='/specials'>Specials</Nav.Link>
                <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                <Nav.Link as={Link} to='/faq'>FAQ</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link eventKey={2} href='phone'> 555-555-5555 </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

        <Switch>
        <Route exact path='/'>
        <Home 
        requestService={requestService}
        setRequestService={setRequestService}
        />
        </Route>
        <Route path='/about'>
          <AboutUs

          />
        </Route>

        <Route path='/specials'>
          <Specials

          />
        </Route>

        <Route path='/contact'>
          <Contact

          />
        </Route>

        <Route path='/faq'>
          <Faqs 
          
          />
        </Route>
        </Switch>
        <Footer 
        />
        <FooterContactButton 
        requestService={requestService}
        setRequestService={setRequestService}
        />
        <ContactModal 
        setRequestService={setRequestService}
        show={requestService}
        onHide={() => setRequestService(false)}
        />

      </Container>
      </Router>
     


  );
}

export default App;
