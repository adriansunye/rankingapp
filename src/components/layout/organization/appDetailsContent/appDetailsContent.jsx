import React from "react";
import { RatingStyled } from "./ratings/ratingsStyles";
import Button from "./buttons/button";
import plusIcon from "@assets/icons/plusIcon.svg";
import TrashIcon from "@assets/icons/trash.svg";
import { CustomTitle } from "@components/layout/organization/appDetailsContent/titles/titlesStyling.js";
import { CustomParagraph } from "@components/layout/organization/appDetailsContent/paragraph/paragraphStyling.js";
import Logo from "@assets/logosSVG/logoAirBnb.png";
import { Row, Col } from "react-bootstrap";
import { OpinionCard } from "./opinionCard/opinionStyles";

const AppDetails = () => {
  return (
    <>
      <div className="container">
        <Row>
          <Col className="d-flex d-lg-none justify-content-md-between justify-content-end">
            <Button image={plusIcon} />
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
              Airbnb
            </CustomTitle>
          </Col>
          <Col className=" col-md-4 d-flex">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </Col>
          <Row>
            <CustomParagraph className="col-lg-8 mt-3" size="medium">
              Airbnb es una compañía que ofrece una plataforma digital dedicada
              a la oferta de alojamientos a particulares y turísticos mediante
              la cual los anfitriones pueden publicitar y contratar el arriendo
              de sus propiedades con sus huéspedes.
            </CustomParagraph>
          </Row>
        </Row>
        <CustomTitle className="d-none d-md-block">Opiniones</CustomTitle>
        <Row className="d-flex flex-column flex-lg-row m-0 gap-2">
          <Col className="col-lg-6 m-0 p-0">
            <OpinionCard className="m-0 p-2 mt-2">
              <CustomTitle>Raul</CustomTitle>
              <CustomParagraph>Muy Buena</CustomParagraph>
            </OpinionCard>
          </Col>
          <Col className="col-lg-6 m-0 p-0">
            <OpinionCard className="m-0 p-2">
              <CustomTitle>Diego</CustomTitle>
              <CustomParagraph>Funciona, messirve</CustomParagraph>
            </OpinionCard>
          </Col>
          <Col className="col-lg-6 m-0 p-0">
            <OpinionCard className="m-0 p-2">
              <CustomTitle>Jordi Valldeperes</CustomTitle>
              <CustomParagraph>Suscribete a mi canal @Span</CustomParagraph>
            </OpinionCard>
          </Col>
          <Col className="col-lg-6 m-0 p-0">
            <OpinionCard className="m-0 p-2">
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
