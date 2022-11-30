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
import Button  from 'react-bootstrap/Button';
import Estrellas from '@components/layout/organization/estrellas/Estrellas.jsx'
import { Link } from "react-router-dom"
/* -----END componente de pop-up valoracion --- */

const AppDetails = () => {
  const [modalShow, setModalShow] = useState(false);
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

let texto = e.target[5].value
let opinion = {user:"user", opinion: e.target[5].value, rating: 3}
console.log(opinion)


let valueStar = ""
console.log("target",e.target);

for(let i=0; i < 5; i++){
  if( e.target[i].checked ){
   valueStar = e.target[i].value;
  }else{

  }
}

  console.log("star",valueStar);





console.log(clickedObject.opinions)

clickedObject.opinions.push(texto);

setElementList(clickedObject.opinions)

console.log(elementList)


let updateLocalStorage = JSON.parse(localStorage.getItem("data")).map( objt => (objt.app_id === clickedObject.app_id) ? objt.opinions.push(texto) : null  );

localStorage.setItem("data", JSON.stringify(updateLocalStorage ));


} 

const handleClick = (e) =>{


  const removeLocalStorage = Object.entries(JSON.parse(localStorage.getItem("data"))) // converts each entry to [key, value]
  .filter(([k, v]) => v.app_id !== clickedObject.app_id) // define the criteria to include/exclude items
  .reduce((acc, [k, v]) => {
    acc[k] = v;
    return acc; // this function can be improved, it converts the [[k, v]] back to {k: v, k: v, ...}
  }, {});

  localStorage.setItem("data", JSON.stringify(removeLocalStorage));

  

  console.log(removeLocalStorage)
  
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
          <Button onClick={() => handleClick()}/>
          
        </Row>
        <CustomTitle className="d-none d-md-block">Opiniones</CustomTitle>
      </div>
      <div className="container">
          <Row className="">
          { clickedObject.opinions.map( (item , index) => <Col key={index + "msg"}lg={6} className="m-0">
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

        {/* Ejecutar modal de valoracion END */}
        
    </>
  );
};

export default AppDetails
