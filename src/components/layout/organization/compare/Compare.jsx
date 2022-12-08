import React from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CustomTitle } from '../appDetailsContent/titles/titlesStyling';
import { useState } from 'react';
import  {ImageStayled } from '../compare/Compare_styled';
import EstrellasValoracion from '@components/layout/organization/estrellas/EstrellasValoracion.jsx';
import {CardStyled2} from '@components/layout/organization/compare/Compare_styled.js';


function Compare() {

    const [clickedObject] = useState(JSON.parse(localStorage.getItem('clickedItem')));
    console.log(clickedObject);

    return (

        <>
            <Row className="text-center justify-content-around ">

                <CardStyled2>

                    <Col className=" xs={12} sm={6} border-10">
                        <CustomTitle weight="normal" className="mb-4 mt-0" size="medium">
                        {clickedObject.app_name}
                        </CustomTitle>
                    
                    <ImageStayled>
                        <img src={clickedObject.app_icon} alt="Logo" className="avatar-img-detail img-fluid width={10}" />
                    </ImageStayled>   

                    <div className="justify-content-center d-flex mb-4"> 
                        <EstrellasValoracion rat={clickedObject.rating} /> 
                        <span>{clickedObject.rating}</span>
                    </div>

                    <Col className="text-center  "  >
                        <CustomTitle className="mb-10">
                            {' '}
                            <strong>Tipo de App:</strong> {clickedObject.type === 0 ? 'Web' : 'Desktop'}{' '}
                        </CustomTitle>

                        <CustomTitle className="mb-20">
                            {' '}
                            <strong>Descargas</strong> {clickedObject.num_downloads_exact}{' '}
                        </CustomTitle>
                    
                    </Col>
                    <a className="btn btn-secundary" href={clickedObject.app_page_link} target="_blank"> Download  </a>
                    </Col>
            
                </CardStyled2>
                    
                <CardStyled2>

                    <Col className=" xs={12} sm={6} border-10">
                        <CustomTitle weight="normal" className="mb-4 mt-0" size="medium">
                        {clickedObject.app_name}
                        </CustomTitle>
                    
                    <ImageStayled>
                        <img src={clickedObject.app_icon} alt="Logo" className="avatar-img-detail img-fluid width={10}" />
                    </ImageStayled>   

                    <div className="justify-content-center d-flex mb-4"> 
                        <EstrellasValoracion rat={clickedObject.rating} /> 
                        <span>{clickedObject.rating}</span>
                    </div>

                    <Col className="text-center  "  >
                        <CustomTitle className="mb-10">
                            {' '}
                            <strong>Tipo de App:</strong> {clickedObject.type === 0 ? 'Web' : 'Desktop'}{' '}
                        </CustomTitle>

                        <CustomTitle className="mb-20">
                            {' '}
                            <strong>Descargas</strong> {clickedObject.num_downloads_exact}{' '}
                        </CustomTitle>
                    
                    </Col>
                    <a className="btn btn-secundary" href={clickedObject.app_page_link} target="_blank"> Download  </a>
                    </Col>
            
                </CardStyled2>   

            </Row>    
        </>

        );
};

export default Compare;