import styled from "styled-components";
import { colorVariables } from '@utils/variables'

export const CustomTitle = styled.p`
    display:block;
    letter-spacing: -0.05rem;
    font-family: 'Mulish' !important;
    ${props => props.weight === "bold" ? "font-weight: bold;":null}
    ${props => props.weight === "light" ? "font-weight: light;":null}
    ${props => props.color === "grey" ?  `color: ${colorVariables.grisOscuro}`:null}
    ${props => props.size === "medium" ? "font-size: 3rem":null}

    
`