import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./Navbar.styled";
import CreateApp from "@components/layout/organization/createApp/CreateApp.jsx";

import LogoImg from "../../../../assets/arco.png";
import { Link } from "react-router-dom";
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
          <CreateApp />
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default NavBar;