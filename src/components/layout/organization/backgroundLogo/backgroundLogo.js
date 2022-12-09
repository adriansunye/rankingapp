import styled,{ keyframes} from "styled-components";

const rotate = keyframes`

from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`
export const BackgroundLogo = styled.img`
position: fixed;
top: -150px;
right: -50px;
z-index: -2;
opacity: .25;
animation:${rotate} infinite 20s linear;
`