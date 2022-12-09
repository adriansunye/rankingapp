import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { EstrellasPuntos } from '@components/layout/organization/estrellas/estrellasStyles.js'


const AppSliderCardStyled = styled(Card)`
.card-body {
  position: absolute;
	width: 100%;
	height: 100%;
	bottom: 0;
	z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
	opacity: 0;
	transform: translate(0px, 70px);
	transition: all 0.2s ease-in-out;
}

&:hover .card-body{
  transform: translate(0px, 0px);
	opacity: 1;
  background-color: white;
}
.card-title {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: black;
}
`


const AppSliderCard = (props) => {
let {imgSrc, name, category, rating} = props.data
  return (
    <>
      <AppSliderCardStyled className="p-0 overflow-hidden h-75 w-100 shadow">    
        <div className="overflow-hidden  rounded p-0">
          <AppSliderCardStyled.Img className="slideImgaeFix" variant="top" src={imgSrc}></AppSliderCardStyled.Img>
        </div>
        <div className="p-2 d-flex align-items-center justify-content-center">
        <AppSliderCardStyled.Text className="m-0 text-center">{rating}</AppSliderCardStyled.Text>
        <EstrellasPuntos mode="on"></EstrellasPuntos>
        </div>
        <AppSliderCardStyled.Body className="text-center">
            <AppSliderCardStyled.Title >{name}</AppSliderCardStyled.Title>
            <AppSliderCardStyled.Text>{category}</AppSliderCardStyled.Text>
            {props.children}
        </AppSliderCardStyled.Body>
      </AppSliderCardStyled>
    </>
  );
};

export default AppSliderCard;
