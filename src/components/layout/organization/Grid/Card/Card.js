import { Card } from "react-bootstrap";
import styled from "styled-components";
import { colorVariables } from '@utils/variables'


export const CardStyled = styled(Card)`
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
`