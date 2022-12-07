import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  CenterContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./NavBar.styled";
import CreateApp from "@components/layout/organization/createApp/CreateApp.jsx";
import Comparar from "../../../../views/Comparar/Comparar";
import LogoImg from "../../../../assets/arco.png";
import { Link } from "react-router-dom";
import SearchBar from "@components/layout/navigation/SearchBar/SearchBar";
import FilterButtons from "@components/layout/organization/filterButtons/FilterButtons";
import Footer from "@components/layout/navigation/Footer/Footer";

/* import IconAdd from "../../../../assets/iconadd.png";
import IconHome from "../../../../assets/iconhome.png";
 */
function NavBar() {

  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer className="sticky-top">
      <NavbarInnerContainer>
        <Link to="/">
          <LeftContainer>
            {" "}
            <Logo src={LogoImg}></Logo>
          </LeftContainer>
        </Link>
      
        <RightContainer>
          <NavbarLinkContainer>
          <NavbarLink>
          <CreateApp />
          </NavbarLink>
          <NavbarLink> COMPAPAR </NavbarLink> 
           {/*      <Link to ="/comparar">{<Comparar/>}</Link>  */}
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >  
              {extendNavbar ? <> &#10005; </> : <>&#x2630; </>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended> 
            <CreateApp />
            </NavbarLinkExtended>
            <NavbarLinkExtended> COMPAPAR </NavbarLinkExtended> 
         
            <NavbarLinkExtended> <SearchBar/></NavbarLinkExtended> 
            
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default NavBar;