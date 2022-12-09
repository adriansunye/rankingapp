import React from 'react';
import { useState, useEffect } from 'react';
import { CardStyled } from "@components/layout/organization/Grid/Card/Card"
import { EstrellasPuntos } from '@components/layout/organization/estrellas/estrellasStyles.js'
import { Row, Col } from 'react-bootstrap';
import { Select } from "antd"; // "3.26.7" worked


const Comparar = () => {
  const [data] = useState(JSON.parse(localStorage.getItem('data')));
  const [toCompare, setToCompare] = useState();
  const [compared, setCompared] = useState();




  const handleChange = (event) => {
    
    data.forEach((obj) => {
      if(obj.app_name.toLowerCase() === event.target.value.toLowerCase()){
        event.target.id === "toCompareSelect" ? setToCompare(obj) : setCompared(obj) 
      }
    });
    
  };

  return (
    <>
    <Row>
      <Col><input list="toCompareList" id="toCompareSelect" onChange={(event) => handleChange(event)}/>
      <datalist id="toCompareList">
        {Object.entries(data).map(([key]) => (
          <option value={data[key].app_name} key={data[key].app_id}></option>
        ))}
        </datalist>
    </Col>
    <Col><input list="comparedList" id="comparedSelect" onChange={(event) => handleChange(event)}/>
    <datalist id="comparedList">
        {Object.entries(data).map(([key]) => (
          <option value={data[key].app_name} key={data[key].app_id}></option>
        ))}
        </datalist>
    </Col>
    </Row>
      <Row>
      {toCompare ?
        <Col key={"toCompare" + toCompare.app_id} className="d-flex flex-column justify-content-center col-8 col-md">
          <div className="row h-100 align-content-between">
            <div className="col col-sm-auto d-flex align-items-center">
              <img
                src={toCompare.app_icon ? toCompare.app_icon : ""}
                alt="logo"
                className="img-fluid p-2 p-sm-3 rounded-circle card-img-fix"
              />
            </div>
            <div className="col-8 col-sm col-md-7 col-lg">
              <div className="row h-100 align-items-center justify-content-between">
                <div className="col-9 px-0">
                  <div>{toCompare.app_name}</div>
                  <div>{toCompare.app_category}</div>
                </div>
                <div className="col justify-content-end d-flex h-100">

                  <span style={{ color: "black" }}>{toCompare.rating}</span>
                  <EstrellasPuntos mode="on" ></EstrellasPuntos>
                </div>
              </div>
            </div>
          </div>
        </Col> : <div> Sin busqueda </div>}
        {compared ?
        <Col key={"compared" + compared.app_id} className="d-flex flex-column justify-content-center col-8 col-md">
          <div className="row h-100 align-content-between">
            <div className="col col-sm-auto d-flex align-items-center">
              <img
                src={compared.app_icon ? compared.app_icon : ""}
                alt="logo"
                className="img-fluid p-2 p-sm-3 rounded-circle card-img-fix"
              />
            </div>
            <div className="col-8 col-sm col-md-7 col-lg">
              <div className="row h-100 align-items-center justify-content-between">
                <div className="col-9 px-0">
                  <div>{compared.app_name}</div>
                  <div>{compared.app_category}</div>
                </div>
                <div className="col justify-content-end d-flex h-100">

                  <span style={{ color: "black" }}>{compared.rating}</span>
                  <EstrellasPuntos mode="on" ></EstrellasPuntos>
                </div>
              </div>
            </div>
          </div>
          </Col> : <div> Sin busqueda </div>}
      </Row>

    </>
  );
}

export default Comparar;