import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
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
} from './Navbar.styled';
import CreateApp from '@components/layout/organization/createApp/CreateApp.jsx';
import Comparar from '../../../../views/Comparar/Comparar';
import LogoImg from '../../../../assets/arco.png';
import LogoSVG from '@assets/logosSVG/Atomo/logo/arco.svg'
import { Link } from 'react-router-dom';
/* import IconAdd from "../../../../assets/iconadd.png";
import IconHome from "../../../../assets/iconhome.png";
 */
function NavBar() {
	const [extendNavbar, setExtendNavbar] = useState(false);
	return (
		<NavbarContainer className="sticky-top">
     < Container>
			<NavbarInnerContainer>
				<Link to="/" className='d-flex align-items-center'>
					<LeftContainer className='align-items-center'>
						{' '}
						<Logo src={LogoSVG}></Logo>
						<p className='ms-2 mb-0 fw-bold fs-5'>ARCO<sub className='d-block mb-2'>App</sub></p>
					</LeftContainer>
				</Link>

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
