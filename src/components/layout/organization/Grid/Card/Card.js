import { Card } from "react-bootstrap";
import styled from "styled-components";
import { colorVariables } from '@utils/variables'


export const CardStyled = styled(Card)`
overflow: hidden;
&:hover {
    scale: 1.02;
    z-index: 1;
    background-color: ${colorVariables.grisClaro};
}
.card-span {
    color:white;
}
.card-title {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: black;
}
.card-text {
    color: ${colorVariables.grisOscuro};
}
.card-rating{
    color:black;
}

.card-img-fix{
  width:101px;
  height: 101px;
  object-fit: cover;



}

@media (max-width: 321px){

    .card-img-fix{
        width: 90px;
        height: 90px;
        }
  }

`