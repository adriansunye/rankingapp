
import React, {useState} from "react";
import {NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, Logo, OpenLinksButton, NavbarLinkExtended   } from "./Navbar.styled";
import LogoImg from "../../../../assets/arco.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false)
  return <NavbarContainer>
<NavbarInnerContainer>
  <LeftContainer> <Logo src= {LogoImg}></Logo>
  </LeftContainer>
  <RightContainer> 
    <NavbarLinkContainer>
    <NavbarLink to ="/">Home</NavbarLink>
    <NavbarLink to ="/about">About Us</NavbarLink>
    <NavbarLink to = "/contact">Contact Us</NavbarLink>
    <OpenLinksButton onClick = {() => { 
  setExtendNavbar((curr) => !curr);
   }} > 
  {extendNavbar ? <> &#10005;  </> : <> </> }  &#8803; </OpenLinksButton>
      </NavbarLinkContainer> 
  </RightContainer>
</NavbarInnerContainer>

 { extendNavbar && ( 
<NavbarExtendedContainer>
<NavbarLinkExtended to ="/">Home</NavbarLinkExtended >
    <NavbarLinkExtended  to ="/about">About Us</NavbarLinkExtended >
    <NavbarLinkExtended  to = "/contact">Contact Us</NavbarLinkExtended >
</NavbarExtendedContainer>
)}
</NavbarContainer>

}
  

export default Navbar;