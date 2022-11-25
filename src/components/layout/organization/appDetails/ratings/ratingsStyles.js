import styled from "styled-components";
import { colorVariables } from '@utils/variables.js'
import rating from "@components/layout/organization/appDetails/ratings/ratings.jsx"


/* Estilos al div que envuelve a las estrellas */
export const RatingStyled = styled(rating)`

/*   layout de las estrellas */
  display: flex;
  width: 100%;
  justify-content: flex-end;
  overflow: hidden;
  flex-direction: row-reverse;
  position: relative;


input {
 /*  oculta el radio input  */
  display: none; 
}

label {

/*   utiliza la forma de estrella para sustituir el radio input */
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-top: auto;
  background-color: ${colorVariables.grisMedio};
  mask-image: url('data:image/svg+xml;utf8,%3csvg width="23" height="21" xmlns="http://www.w3.org/2000/svg"><path d="M11.4377 0L14.0056 7.9463H22.3155L15.5926 12.8574L18.1606 20.8037L11.4377 15.8926L4.71478 20.8037L7.28269 12.8574L0.559799 7.9463H8.86975L11.4377 0Z" fill="currentColor" /%3e%3c/svg%3e' );
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  transition: .3s;
}

input:checked ~ label,
input:checked ~ label ~ label {
 /*  Votados */
  background-color: ${colorVariables.amarillo};
  mask-image: url('data:image/svg+xml;utf8,%3csvg width="23" height="21" xmlns="http://www.w3.org/2000/svg"><path d="M11.4377 0L14.0056 7.9463H22.3155L15.5926 12.8574L18.1606 20.8037L11.4377 15.8926L4.71478 20.8037L7.28269 12.8574L0.559799 7.9463H8.86975L11.4377 0Z" fill="currentColor" /%3e%3c/svg%3e');
  mask-repeat: no-repeat;
}


input:not(:checked) ~ label:hover,
input:not(:checked) ~ label:hover ~ label {
 /*  Hover antes de votar */
  background-color: ${colorVariables.amarillo};
  mask-image: url('data:image/svg+xml;utf8,%3csvg width="23" height="21" xmlns="http://www.w3.org/2000/svg"><path d="M11.4377 0L14.0056 7.9463H22.3155L15.5926 12.8574L18.1606 20.8037L11.4377 15.8926L4.71478 20.8037L7.28269 12.8574L0.559799 7.9463H8.86975L11.4377 0Z" fill="currentColor" /%3e%3c/svg%3e');
  mask-repeat: no-repeat;
}
`