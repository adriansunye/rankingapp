import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Star } from '@assets/stars/Star.svg' //! SVG de la estrellas
import { colorVariables } from '@utils/variables.js'

const EstrellasPuntos = styled(Star)`
cursor:pointer;
color:${ props => props.mode === 'on' ? colorVariables.amarillo : colorVariables.grisMedio };

`

const PuntuarStyle = styled.div`

&:hover svg{
    color: ${colorVariables.amarillo};
    &:hover ~ svg {
      color: ${colorVariables.grisMedio};
    }
}


`

/* ESTADOS */
const EstrallaOff = "off"



const Estrellas = () => {
  return (
<PuntuarStyle>
    <EstrellasPuntos mode=""/>
    <EstrellasPuntos mode=""/>
    <EstrellasPuntos mode=""/>
    <EstrellasPuntos mode=""/>
    <EstrellasPuntos mode=""/>
</PuntuarStyle>
  )
}

export default Estrellas