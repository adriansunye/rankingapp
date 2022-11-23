
import styled from "styled-components" ;
/* import {Link} from "react-route-dom"; */


export const NavbarContainer = styled.nav`
width: 100%;
height: 80px;
display: flex;
flex-direction: column;
background-color:white; 
`;
export const RightContainer = styled.div `
flex: 70%;
display: flex;
justify-content: flex-end;
align-items: center;
padding-right: 5%;


`;
export const LeftContainer = styled.div `
flex: 30%;
display: flex;
justify-content: flex-start;
padding-left: 30px;

`;
export const NavbarInnerContainer = styled.div `
width: 100%;
height:80px;
display: flex;
`;

export const NavbarLinkContainer = styled.div `
display: flex;
`;
export const NavbarLink= styled.div ` //(Link)
color: #7273DD;
font-family: ‘Mulish’, sans-serif;
font-size: 1.5rem;
text-decoration: none;
margin: 8px;
@media (max-width:700px) {display: none} ;
`;

export const NavbarLinkExtended = styled.div ` //(Link)
color: #7273DD;
font-family: ‘Mulish’, sans-serif;
font-size: 1.5rem;
text-decoration: none;
margin: 8px;
`;

export const Logo = styled.img `
margin-top:28px;

max-width: 200px;
height: auto;
`;
 export const OpenLinksButton = styled.button`
 width: 70px;
 height:50px;
 background: none;
 border: none;
 color:#7273DD;
 font-size:45px;
 padding:0;
  cursor: pointer;
  @media (min-width:700px) {display: none} ;
 `;
export const NavbarExtendedContainer = styled.div `
display: flex;
flex-direction: column;
align-items:center;
@media (min-width: 700px) {
    display: none;
};
 `;

