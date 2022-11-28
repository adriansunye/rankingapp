
import styled from "styled-components" ;
import {colorVariables} from "../../../../utils/variables";
/* import {Link} from "react-route-dom"; */


export const NavbarContainer = styled.nav`
width: 100%;
height: 80px;
display: flex;
flex-direction: column;
background-color:transparent; 
`;
export const RightContainer = styled.div `
flex: 40%;
display: flex;
justify-content: flex-end;
align-items: center;
padding-right: 5%;
`;
export const CenterContainer = styled.div `
flex: 30%;
display: flex;
justify-content: flex-end;
padding-left: 30px;

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
export const NavbarLink = styled.div `
color: ${colorVariables.lila};
font-family: ‘Mulish’, sans-serif;
font-size: 16px;;
text-decoration: none;
margin: 8px;
&:hover,
&:focus{
    color: ${colorVariables.rosa};
};
@media (max-width:700px) {display: none} ;
`;

export const NavbarLinkExtended = styled.div` 
color: ${colorVariables.lila};
font-family: ‘Mulish’, sans-serif;
font-size: 16px;
text-decoration: none;
margin: 8px;
&:hover,
&:focus{
    color: ${colorVariables.rosa};
};
`;

export const Logo = styled.img `
margin-top:15px;
width: auto;
height: 50px;
`;
 export const OpenLinksButton = styled.button`
 width: 70px;
 height:50px;
 background: none;
 border: none;
 color: ${colorVariables.lila};
 font-size:2rem;
 padding:0;
  cursor: pointer;
  @media (min-width:700px) {display: none} ;
  &:hover,
&:focus{
    color: ${colorVariables.rosa};

};
 `;
export const NavbarExtendedContainer = styled.div `
display: flex;
flex-direction: column;
align-items:center;

@media (min-width: 700px) {
    display: none;
};
 `;

