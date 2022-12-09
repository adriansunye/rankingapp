import styled from "styled-components"; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {colorVariables}  from '@utils/variables.js';
import { Card } from "react-bootstrap";

export const ImageStayled = styled.div `

    
    margin-bottom: 15px;
    display:flex;
    justify-content:center!important;
    align-items:center;

    img { 
        max-width:200px;
    }
`

export const CardStyled2 = styled(Card) `

overflow: hidden;
&:hover {
    scale: 1.01;
    z-index: 1;
    box-shadow: 7px 7px${colorVariables.grisClaro};
}
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.175);
    border-radius: 0.8rem;
    width: 40%;
    padding-bottom:30px;
    
    `