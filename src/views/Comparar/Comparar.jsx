import React from 'react';
import { useState, useEffect } from 'react';
import Footer from '@components/layout/navigation/Footer/Footer';
import NavBar from '@components/layout/navigation/NavBar/Navbar.jsx';
import SearchBar from "@components/layout/navigation/SearchBar/SearchBar";
import { CardStyled } from "@components/layout/organization/Grid/Card/Card"
import { EstrellasPuntos } from '@components/layout/organization/estrellas/estrellasStyles.js'
import { Row, Col } from 'react-bootstrap';
import Compare from "@components/layout/organization/compare/Compare"
import { Link } from "react-router-dom";
import { CustomTitle } from '@components/layout/organization/appDetailsContent/titles/titlesStyling';
import { ImageStayled } from '@components/layout/organization/compare/Compare_styled';
import EstrellasValoracion from '@components/layout/organization/estrellas/EstrellasValoracion.jsx';



const Comparar = () => {
  const [data] = useState(JSON.parse(localStorage.getItem('data')));
  const [toCompare, setToCompare] = useState();
  const [compared, setCompared] = useState();




  const handleChange = (event) => {

    data.forEach((obj) => {
      if (obj.app_name.toLowerCase() === event.target.value.toLowerCase()) {
        event.target.id === "toCompareSelect" ? setToCompare(obj) : setCompared(obj)
      }
    });

  };

  return (
    <>
      <NavBar />
      <div className='container'>
        <Row>
          <Col>
            <input list="toCompareList" id="toCompareSelect" onChange={(event) => handleChange(event)} />
            <datalist id="toCompareList">
              {Object.entries(data).map(([key]) => (
                <option value={data[key].app_name} key={data[key].app_id}></option>
              ))}
            </datalist>
          </Col>
          <Col><input list="comparedList" id="comparedSelect" onChange={(event) => handleChange(event)} />
            <datalist id="comparedList">
              {Object.entries(data).map(([key]) => (
                <option value={data[key].app_name} key={data[key].app_id}></option>
              ))}
            </datalist>
          </Col>
        </Row>
        <Row>
          {toCompare ?
          <Col className="text-center">

            <Col className="">
              <CustomTitle weight="bold" className="mb-4 mt-0" size="medium">
                {toCompare.app_name}
              </CustomTitle>

              <ImageStayled>
                <img src={toCompare.app_icon} alt="Logo" className="avatar-img-detail img-fluid width={10}" />
              </ImageStayled>

              <div className="justify-content-center d-flex mb-4">
                <EstrellasValoracion rat={toCompare.rating} />
                <span>{toCompare.rating}</span>
              </div>

              <Col className="text-center  "  >
                <CustomTitle className="mb-10">
                  {' '}
                  <strong>Tipo de App:</strong> {toCompare.type === 0 ? 'Web' : 'Desktop'}{' '}
                </CustomTitle>

                <CustomTitle className="mb-20">
                  {' '}
                  <strong>Descargas</strong> {toCompare.num_downloads_exact}{' '}
                </CustomTitle>

              </Col>
              <a className="btn btn-secundary" href={toCompare.app_page_link} target="_blank"> Download  </a>
            </Col>

          </Col> : <div> Sin busqueda </div>}

          {compared ?
          <Col className="text-center">

            <Col className="">
              <CustomTitle weight="bold" className="mb-4 mt-0" size="medium">
                {compared.app_name}
              </CustomTitle>

              <ImageStayled>
                <img src={compared.app_icon} alt="Logo" className="avatar-img-detail img-fluid width={10}" />
              </ImageStayled>

              <div className="justify-content-center d-flex mb-4">
                <EstrellasValoracion rat={compared.rating} />
                <span>{compared.rating}</span>
              </div>

              <Col className="text-center  "  >
                <CustomTitle className="mb-10">
                  {' '}
                  <strong>Tipo de App:</strong> {compared.type === 0 ? 'Web' : 'Desktop'}{' '}
                </CustomTitle>

                <CustomTitle className="mb-20">
                  {' '}
                  <strong>Descargas</strong> {compared.num_downloads_exact}{' '}
                </CustomTitle>

              </Col>
              <a className="btn btn-secundary" href={compared.app_page_link} target="_blank"> Download  </a>
            </Col>

          </Col> : <div> Sin busqueda </div>}
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default Comparar;

