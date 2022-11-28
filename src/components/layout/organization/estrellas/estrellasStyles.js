import styled from 'styled-components'
import { colorVariables } from '@utils/variables.js'
import { ReactComponent as Star } from '@assets/stars/Star.svg' //! SVG de la estrellas

export const EstrellasPuntos = styled(Star)`
cursor:pointer;
color:${ props => props.mode === 'on' ? colorVariables.amarillo : colorVariables.grisMedio };

`

export const PuntuarStyle = styled.div`

&:hover svg{
    color: ${colorVariables.amarillo};
    &:hover ~ svg {
      color: ${colorVariables.grisMedio};
    }
}

`