import Button from 'react-bootstrap/Button';
import styled from "styled-components";

export const FilterButtonStyles = styled(Button)`
    color: black;
    border-color: #7273DD;
    background: transparent;
    border-radius: 15px;
    width: 7rem;
    height: 2.5rem;
    &:hover{
        background-color: #7273DD;
    }&:active{
        background-color: #7273DD !important;
        opacity: 80%;
        scale: 1.03;    
    };
`