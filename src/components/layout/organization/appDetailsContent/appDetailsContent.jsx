import React from "react";
import AddButton from "./buttons/button";
import TrashIcon from "@assets/icons/trash.svg";
import { CustomTitle } from "@components/layout/organization/appDetailsContent/titles/titlesStyling.js";
import { CustomParagraph } from "@components/layout/organization/appDetailsContent/paragraph/paragraphStyling.js";
import { Row, Col } from "react-bootstrap";
import { OpinionCard } from "./opinionCard/opinionStyles";
/* -----START componente de pop-up valoracion --- */
import { useState, useEffect } from 'react';
import Valoracion from '@components/layout/organization/valoracion/Valoracion'
import DeleteAlert from '@components/layout/organization/DeleteAlert/DeleteAlert'
import Button  from 'react-bootstrap/Button';
import Estrellas from '@components/layout/organization/estrellas/Estrellas.jsx'
/* -----END componente de pop-up valoracion --- */

const AppDetails = () => {
  const [modalShow, setModalShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [clickedObject] = useState(JSON.parse(localStorage.getItem("clickedItem")));
  const [elementList, setElementList] = useState()
  
 useEffect(( ) => { 


  let updateLocalStorage = JSON.parse(localStorage.getItem("data"));

  if(elementList != null){
    updateLocalStorage.map( objt => objt.app_id === clickedObject.app_id ? objt.opinions.push(elementList) : objt  )
  
  localStorage.setItem("data", JSON.stringify(updateLocalStorage));
  }
} );

const handleSubmit = (e) =>{
  e.preventDefault();
  let ratingValue = ""
  for(let i=0; i < 5; i++){
    if(e.target[i].checked){
      ratingValue = e.target[i].value
      console.log(e.target[i].value)
    }
  }
let opinion = {user:"user", opinion: e.target[5].value, rating: `${ratingValue}`}


clickedObject.opinions.push(opinion);
setElementList(opinion)
} 

const handleClick = (e) =>{
  let removeLocalStorage = [];

  console.log(removeLocalStorage)
  JSON.parse(localStorage.getItem("data")).filter(obj => {
    if(obj.app_id !== clickedObject.app_id){
      removeLocalStorage.push(obj)
    }
  })

  localStorage.setItem("data", JSON.stringify(removeLocalStorage));

  setDeleteShow(true)
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
            <CustomParagraph isDescription className="col-lg-8 mt-3" size="medium">
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
      <CustomTitle>{item.user}</CustomTitle>
      <CustomParagraph>{item.opinion}</CustomParagraph>
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

        <DeleteAlert
        title="Elemento eliminado"
        show={deleteShow}
        onHide={() => setDeleteShow(false)}
        />

        {/* Ejecutar modal de valoracion END */}
        
    </>
  );
};

export default AppDetails;