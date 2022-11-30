import React, {useState} from "react";
import {NavbarContainer, LeftContainer,  RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, Logo, OpenLinksButton, NavbarLinkExtended   } from "./Navbar.styled";
import CreateApp from '@components/layout/organization/createApp/CreateApp.jsx'
import LogoImg from "../../../../assets/arco.png";
/* import IconAdd from "../../../../assets/iconadd.png";
import IconHome from "../../../../assets/iconhome.png";
 */
function NavBar() {
  const [extendNavbar, setExtendNavbar] = useState(false)
  return <NavbarContainer className="sticky-top">
   <NavbarInnerContainer>
  <LeftContainer> <Logo src= {LogoImg} ></Logo>
  </LeftContainer>

   <RightContainer> 
    <NavbarLinkContainer>
    <CreateApp />

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
  

export default NavBar;