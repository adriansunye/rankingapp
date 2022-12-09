import React from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CustomTitle } from '../appDetailsContent/titles/titlesStyling';
import { useState } from 'react';
import  {ImageStayled } from '../compare/Compare_styled';
import EstrellasValoracion from '@components/layout/organization/estrellas/EstrellasValoracion.jsx';




function Compare() {

    const [clickedObject] = useState(JSON.parse(localStorage.getItem('clickedItem')));

    console.log(clickedObject);

    

    return (

        <>
        
        
        

        </>

        );
};

export default Compare;