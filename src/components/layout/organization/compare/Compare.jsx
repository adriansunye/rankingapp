import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CustomTitle } from '../appDetailsContent/titles/titlesStyling';
import Estrellas from '../estrellas/Estrellas.jsx';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import  {ImageStayled } from '../compare/Compare_styled';
import EstrellasValoracion from '@components/layout/organization/estrellas/EstrellasValoracion.jsx';


function Compare() {
    // const lastSearch = useContext(SearchedObjectContext);
    const [clickedObject] = useState(JSON.parse(localStorage.getItem('clickedItem')));

    console.log(clickedObject);

    // const handleClick = (e) => {
		
	// 	JSON.parse(localStorage.getItem('data')).filter((obj) => {
	// 		if (obj.app_page_link !== clickedObject.app_page_link) {
	// 			.
	// 		}
	// 	});



    

    return (

        <>
        <div className="container">
        

            <Row className="text-center">
                <Col className=" xs={12} sm={6}">
                    <CustomTitle weight="bold" className="mb-4 mt-0" size="medium">
                        {clickedObject.app_name}
                    </CustomTitle>
                
                <ImageStayled>
                    <img src={clickedObject.app_icon} alt="Logo" className="avatar-img-detail img-fluid width={10}" />
                </ImageStayled>   

                <div className="justify-content-center d-flex mb-4"> 
                <EstrellasValoracion rat={clickedObject.rating} />
                </div>

                <Col className="text-center" >
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
            

                <Col className=" xs={12} sm={6}">
                    <CustomTitle weight="bold" className="mb-4 mt-0" size="medium">
                        {clickedObject.app_name}
                    </CustomTitle>
                
                <ImageStayled>
                    <img src={clickedObject.app_icon} alt="Logo" className="avatar-img-detail img-fluid mx-auto d-block" />
                </ImageStayled>   

                <div className="justify-content-center d-flex mb-4"> 
                <EstrellasValoracion rat={clickedObject.rating} />
                </div>
                
                <Col className="text-center" >
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
           

            </Row>
        </div>
        </>

        );
};

export default Compare;