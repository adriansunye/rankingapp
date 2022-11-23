import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Facebook from '@src/assets/logosSVG/footer/Facebook';
        
    function Footer() {
        return (

            <footer>     
                
                <Container>
                
                <Nav className="me-auto">
                    <div className='nav-link'> © ARCO.APPS  2022. </div>
                    <div className='nav-link'> Follow As:</div>
                    <Nav.Link as={Link} to="#twitter"> <img src={Facebook} alt="facebook"/></Nav.Link>
                    <Nav.Link as={Link} to="#facebook">Pricing</Nav.Link>
                    <Nav.Link as={Link} to="#instagram">Pricing</Nav.Link>
                </Nav>
                </Container>
                    
            </footer>
        );
        }
        
export default Footer;


