import styled,{ css } from 'styled-components'
import { colorVariables } from '@utils/variables.js'
import { ReactComponent as Star } from '@assets/stars/Star.svg' //! SVG de la estrellas

export const EstrellasPuntos = styled(Star)`

color:${ props => props.mode === 'on' ? colorVariables.amarillo : colorVariables.grisMedio };
${ (props) => props.isvotars && css`
cursor:pointer;
width: 40px;
height: 40px;
`}
`

export const PuntuarStyle = styled.div`
 display: flex;
 justify-content: start;
 ${ (props) => props.isVotar && css`

    &:hover svg{ color: ${colorVariables.amarillo};
                  &:hover ~ svg { color: ${colorVariables.grisMedio}; }
                }
   `
  }

`