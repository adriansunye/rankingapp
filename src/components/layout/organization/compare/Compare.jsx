import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CustomTitle } from '../appDetailsContent/titles/titlesStyling';
import Estrellas from '../estrellas/Estrellas.jsx';
import { useState , useContext} from 'react';


function Compare() {
    // const lastSearch = useContext(SearchedObjectContext);
    const [clickedObject] = useState(JSON.parse(localStorage.getItem('clickedItem')));

     
    return (

        <>
        <div className="container">
        
            <Row>
                <Col>
                    <CustomTitle weight="bold" className="mb-4 mt-0" size="medium">
                        {clickedObject.app_name}
                    </CustomTitle>
                </Col> 
                <Col className="col-md-4 d-flex">
                    <img src={clickedObject.app_icon} alt="Logo" className="avatar-img-detail img-fluid" />
                </Col>   

                {/* <img
                                                src={searchedObject[key].app_icon ? searchedObject[key].app_icon : placeholderImage}
                                                alt="logo"
                                                onError={onImageError}
                                                className="img-fluid rounded-start"
                                            /> */}

                <Estrellas />
                <Col>
                    <CustomTitle className="mb-0">
                        {' '}
                        <strong>Tipo de App:</strong> {clickedObject.type === 0 ? 'Web' : 'Desktop'}{' '}
                    </CustomTitle>

                    <CustomTitle className="mb-0">
                        {' '}
                        <strong>Descargas</strong> {clickedObject.num_downloads }{' '}
                    </CustomTitle>
                </Col>

            </Row>
        </div>
        </>

        );
};

export default Compare;