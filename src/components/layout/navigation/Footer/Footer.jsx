import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FooterStyle, FooterContainer } from './Footer_styled';
import { Icons} from './Footer_styled';


import {ReactComponent as Twitter} from '@assets/logosSVG/imgFooter/mdi_twitter.svg';    
import {ReactComponent as Facebook} from '@assets/logosSVG/imgFooter/Facebook.svg';     
import {ReactComponent as Instagram} from '@assets/logosSVG/imgFooter/Instagram.svg'; 


// {/* <Nav.Link as={Link} to="facebook"> <Facebook/> </Nav.Link> */} con bootstrap se importa asi el link 
    function Footer() {
        return (

            <FooterContainer>     
                
                <Container >                
                <FooterStyle className="me-auto  flex-nowrap mt-1">
                    <div className='nav-link me-auto'> © ARCO.APPS  2022. <br />We love our users! </div>
                    
                    <Icons>                    
                        <div className='nav-link'> Síguenos:</div>
                        <Nav.Link href="https://twitter.com/" target="_blank"> <Twitter/></Nav.Link>
                        <Nav.Link href="https://www.facebook.com/" target="_blank"> <Facebook/> </Nav.Link>
                        <Nav.Link href="https://www.instagram.com/" target="_blank"> <Instagram/> </Nav.Link>
                    </Icons>
                </FooterStyle>
                </Container>
                    
            </FooterContainer>
        );
        }
        
export default Footer;


