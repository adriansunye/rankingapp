import React from "react";
import { RatingStyled } from "./ratings/ratingsStyles";
import Button from "./buttons/button";
import TrashIcon from "@assets/icons/trash.svg";
import { CustomTitle } from "@components/layout/organization/appDetailsContent/titles/titlesStyling.js";
import { CustomParagraph } from "@components/layout/organization/appDetailsContent/paragraph/paragraphStyling.js";
import Logo from "@assets/logosSVG/logoAirBnb.png";
import { Row, Col } from "react-bootstrap";
import { OpinionCard } from "./opinionCard/opinionStyles";
import { useState } from "react";

const AppDetails = () => {
  const [clickedObject] = useState(JSON.parse(localStorage.getItem("clickedItem")));
  return (
    <>
      <div className="container">
        <Row>
          <Col className="d-flex d-lg-none justify-content-end">
          <Button image={TrashIcon} />
          </Col>
        </Row>
        <Row className="d-flex">
          <RatingStyled />
        </Row>
        <Row>
          <Col className="">
            <CustomTitle className="mb-3" weight="light" color="grey">
              Valorar
            </CustomTitle>
            <CustomTitle className="mb-0">App / Web</CustomTitle>
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
            <Col lg={6}  className="m-0">
              <OpinionCard className="mb-2 p-2">
                <CustomTitle>Raul</CustomTitle>
                <CustomParagraph>Muy Buena</CustomParagraph>
              </OpinionCard>
            </Col>
            <Col lg={6} className="m-0">
              <OpinionCard className="mb-2 p-2">
                <CustomTitle>Diego</CustomTitle>
                <CustomParagraph>Funciona, messirve</CustomParagraph>
              </OpinionCard>
            </Col>
            <Col lg={6} className="m-0">
              <OpinionCard className="mb-2 p-2">
                <CustomTitle>Jordi Valldeperes</CustomTitle>
                <CustomParagraph>Suscribete a mi canal @Span</CustomParagraph>
              </OpinionCard>
            </Col>
            <Col lg={6} className="m-0">
              <OpinionCard className="mb-2 p-2">
                <CustomTitle>Jordi Valldeperes</CustomTitle>
                <CustomParagraph>Suscribete a mi canal @Span</CustomParagraph>
              </OpinionCard>
            </Col>
          </Row>
        </div>
    </>
  );
};

export default AppDetails;