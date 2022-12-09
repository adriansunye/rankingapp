import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import { colorVariables } from '@utils/variables'

export const FilterButtonStyled = styled(Button)`
    color: black;
    border-color: ${colorVariables.lila};
    background: transparent;
    font-weight: 600;
    width: 7rem;
    height: 2.5rem;
    &:hover{
        background-color: ${colorVariables.lila};
        border-color: ${colorVariables.amarillo};
    }&:focus{
        border-color: ${colorVariables.amarillo} !important;
        background-color: ${colorVariables.lila} !important;
        opacity: 80%;
        scale: 1.03;
        color: white;
    }&:active{
        scale: 1.05;
    }
    
    @media( max-width: 320px){

        width: 4.5rem;
        font-size: .78rem;
    }
    
    ;
`