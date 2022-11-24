import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Star } from '@assets/stars/Star.svg' //! SVG de la estrellas

const EstrellasPuntos = styled(Star)`
cursor:pointer;
color:${ props => props.mode === 'on' ? "#FCB149;" : "#D9D9D9;"};
`
/* ESTADOS */
const EstrallaOff = "off"



const Estrellas = () => {
  return (
<div className='estrellas'>
    <EstrellasPuntos mode="on"/>
    <EstrellasPuntos mode="off"/>
    <EstrellasPuntos mode="off"/>
    <EstrellasPuntos mode="off"/>
    <EstrellasPuntos mode="on"/>
</div>
  )
}

export default Estrellas