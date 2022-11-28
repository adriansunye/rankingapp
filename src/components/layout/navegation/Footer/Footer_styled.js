import styled from "styled-components"; 
import Nav from 'react-bootstrap/Nav';
import {colorVariables}  from '@utils/variables.js';




export const FooterStyle = styled(Nav)`

    .nav-link   {
            display:flex;
            svg{width: 1rem;}
            color:white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: nowrap!important;
            
    & nav {
        display: flex;
        flex-wrap: nowrap!important;
    }

}
`
export const Icons = styled.div `
    display: flex;
    
    flex-wrap: nowrap;
    
`

export const FooterContainer = styled.footer`

    background: ${colorVariables.lila};
    justify-content: space-between;
        

`
