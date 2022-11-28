import styled from "styled-components";
import { colorVariables } from '@utils/variables'

export const CustomParagraph = styled.p`
    letter-spacing: -0.05rem;
    font-family: 'Mulish' !important;
    ${props => props.weight === "bold" ? "font-weight: bold;":null}
    ${props => props.weight === "light" ? "font-weight: light;":null}
    ${props => props.color === "grey" ?  `color: ${colorVariables.grisOscuro}`:null}
    ${props => props.size === "small" ? "font-size: 1rem":null}
    ${props => props.size === "medium" ? "font-size: 1.2rem":null}
    ${props => props.size === "large" ? "font-size: 1.5rem":null}
`