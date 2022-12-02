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
            padding: 0.5rem;
            font-size: 0.8rem;
            height: 52px;

}
`
export const Icons = styled.div `
    display: flex;
    
    flex-wrap: nowrap;
    
`

export const FooterContainer = styled.footer`

    background: ${colorVariables.lila};
    justify-content: space-between;
    height: 52px;
        

`




