import React from "react";
import { RatingStyled } from "./ratings/ratingsStyles";
import AddButton from "./buttons/button";
import TrashIcon from "@assets/icons/trash.svg";
import { CustomTitle } from "@components/layout/organization/appDetailsContent/titles/titlesStyling.js";
import { CustomParagraph } from "@components/layout/organization/appDetailsContent/paragraph/paragraphStyling.js";
import { Row, Col } from "react-bootstrap";
import { OpinionCard } from "./opinionCard/opinionStyles";
/* -----START componente de pop-up valoracion --- */
import { useState, useEffect } from 'react';
import Valoracion from '@components/layout/organization/valoracion/Valoracion'
import Button  from 'react-bootstrap/Button';
import Estrellas from '@components/layout/organization/estrellas/Estrellas.jsx'
/* -----END componente de pop-up valoracion --- */

const AppDetails = () => {
  const [modalShow, setModalShow] = useState(false);
  const [clickedObject, setClickedObject ] = useState(JSON.parse(localStorage.getItem("clickedItem")));
  const [elementList, setElementList] = useState()
  
  

 
 useEffect(( ) => { 

  console.log(clickedObject)

} );

const handleSubmit = (e) =>{

e.preventDefault();

 let texto = e.target[5].value

console.log(clickedObject.opinions)

clickedObject.opinions.push(texto);
setElementList(clickedObject.opinions)

console.log(elementList)


let updateLocalStorage = JSON.parse(localStorage.getItem("data")).map( objt => (objt.app_id === clickedObject.app_id) ? objt.opinions.push(texto) : null  );

localStorage.setItem("data", JSON.stringify(updateLocalStorage ));


} 


  return (
    <>
   
      <div className="container">
        <Row>
          <Col className="d-flex d-lg-none justify-content-end">
          <AddButton image={TrashIcon} />
          </Col>
        </Row>
        <Row className="d-flex justify-content-start">
           {/* Ejecutar modal de valoracion START */}
         <Button className="bnt-star" onClick={() => setModalShow(true)}>
          <Estrellas />
        </Button>
        </Row>
        <Row>
          <Col className="">
            <CustomTitle className="mb-3" weight="light" color="grey">
              Valorar
            </CustomTitle>
            <CustomTitle className="mb-0">{ clickedObject.type === 0 ? "Web" : "Desktop" } </CustomTitle>
            <CustomTitle weight="bold" className="mt-lg-5" size="medium">
            {clickedObject.app_name}
            </CustomTitle>
          </Col>
          <Col className=" col-md-4 d-flex">
            <img src= {clickedObject.app_icon} alt="Logo" className="img-fluid" />
          </Col>
          <Row>
            <CustomParagraph className="col-lg-8 mt-3" size="medium">
            {clickedObject.app_description}
            </CustomParagraph>
          </Row>
        </Row>
        <CustomTitle className="d-none d-md-block">Opiniones</CustomTitle>
      </div>
      <div className="container">
          <Row className="">
          { clickedObject.opinions.map( item => <Col lg={6} className="m-0">
    <OpinionCard className="mb-2 p-2">
      <CustomTitle>Diego</CustomTitle>
      <CustomParagraph>{item}</CustomParagraph>
    </OpinionCard>
    </Col> )}
          </Row>
        </div>
        

        {/* pop-up de valoracion */}
        <Valoracion
          title="Valoración"
          comentario="Escribe tu valoración...."
          estrellas="star"
          show={modalShow}
          onHide={() => setModalShow(false)}
          handleSubmit={handleSubmit}
        />

        {/* Ejecutar modal de valoracion END */}
        
    </>
  );
};

export default AppDetails;
