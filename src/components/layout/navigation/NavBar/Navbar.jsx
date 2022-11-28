
import React, {useState} from "react";
import {NavbarContainer, LeftContainer, CenterContainer, RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, Logo, OpenLinksButton, NavbarLinkExtended   } from "./Navbar.styled";

import LogoImg from "../../../../assets/arco.png";
/* import IconAdd from "../../../../assets/iconadd.png";
import IconHome from "../../../../assets/iconhome.png";
 */
function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false)
  return <NavbarContainer>
   <NavbarInnerContainer>
  <LeftContainer> <Logo src= {LogoImg} ></Logo>
  </LeftContainer>
{/*  <CenterContainer> <Logo src= {IconAdd} ></Logo>
  </CenterContainer>  */}
   <RightContainer> 
    <NavbarLinkContainer>
    <NavbarLink to ="/">Home</NavbarLink>
    <NavbarLink to ="/addapp">Add New App</NavbarLink>
    <NavbarLink to ="/about">About Us</NavbarLink>
    <NavbarLink to = "/contact">Contact Us</NavbarLink>

    <OpenLinksButton onClick = {() => { 
  setExtendNavbar((curr) => !curr);
   }} > 
  {extendNavbar ?<> &#10005; </> : <>&#x2630; </> }  
   </OpenLinksButton>
      </NavbarLinkContainer> 
  </RightContainer>
</NavbarInnerContainer>

 { extendNavbar && ( 
<NavbarExtendedContainer>
<NavbarLinkExtended to ="/">Home</NavbarLinkExtended >
<NavbarLinkExtended to ="/addapp">Add New App</NavbarLinkExtended>
    <NavbarLinkExtended  to ="/about">About Us</NavbarLinkExtended >
    <NavbarLinkExtended  to = "/contact">Contact Us</NavbarLinkExtended >
</NavbarExtendedContainer>
)}
</NavbarContainer>

}
  

export default Navbar;