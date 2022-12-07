import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import {
	NavbarContainer,
	LeftContainer,
	RightContainer,
	NavbarInnerContainer,
	NavbarExtendedContainer,
	NavbarLinkContainer,
	NavbarLink,
	Logo,
	OpenLinksButton,
	NavbarLinkExtended,
} from './NavBar.styled';
import CreateApp from '@components/layout/organization/createApp/CreateApp.jsx';

import Comparar from '../../../../views/Comparar/Comparar';

import LogoSVG from '@assets/logosSVG/Atomo/logo/arco.svg'
import { Link } from 'react-router-dom';


function NavBar() {

    <NavbarContainer className="sticky-top">
      <NavbarInnerContainer>
        <Link to="/">
          <LeftContainer>
            {" "}
            {/* <Logo src={LogoImg}></Logo> */}
          </LeftContainer>
        </Link>

        <RightContainer>
          <NavbarLinkContainer>
          {/* <NavbarLink>  <Link to ="/compare">{Compare}</Link> </NavbarLink> */}

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
  
				<RightContainer>
					<NavbarLinkContainer>
						<NavbarLink>
							<CreateApp />
							<Link to="/comparar">{<Comparar />}</Link>
						</NavbarLink>
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
				</NavbarExtendedContainer>
			)}
      </Container>
		</NavbarContainer>
	);

}

export default NavBar;
