
import React, {useState} from "react";
import {NavbarContainer, LeftContainer,  RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, Logo, OpenLinksButton, NavbarLinkExtended   } from "./Navbar.styled";
import CreateApp from "../../organization/createApp/CreateApp";
import LogoImg from "../../../../assets/arco.png";
/* import IconAdd from "../../../../assets/iconadd.png";
import IconHome from "../../../../assets/iconhome.png";
 */
function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false)
  return <NavbarContainer className="fixed-top">
   <NavbarInnerContainer>
  <LeftContainer> <Logo src= {LogoImg} ></Logo>
  </LeftContainer>

   <RightContainer> 
    <NavbarLinkContainer>

    <NavbarLink to ="/"><CreateApp/></NavbarLink>
   

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

<NavbarLinkExtended to ="/"><CreateApp/></NavbarLinkExtended >

</NavbarExtendedContainer>
)}
</NavbarContainer>

}
  

export default Navbar;