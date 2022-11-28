import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import { colorVariables } from '@utils/variables'

export const AddAppStyled = styled(Button)`
    background-color: ${colorVariables.lila};
    border-color: ${colorVariables.lila};
    border-radius: 50%;
    scale: 0.65;
    &:hover{
        background-color: ${colorVariables.lila};
        border-color: ${colorVariables.amarillo};
    }&:active{
        border-color: ${colorVariables.amarillo} !important;
        background-color: ${colorVariables.lila} !important;
        opacity: 80%;
        scale: 0.70;    
    };
`