import React from 'react'
import {  PuntuarStyle, EstrellasPuntos } from '@components/layout/organization/estrellas/estrellasStyles.js'

const Estrellas = () => {
  return (
<PuntuarStyle>
    <EstrellasPuntos className="me-2" mode="on"/>
    <EstrellasPuntos className="me-2" mode="on"/>
    <EstrellasPuntos className="me-2" mode="on"/>
    <EstrellasPuntos className="me-2" mode=""/>
    <EstrellasPuntos className="me-2" mode=""/>
</PuntuarStyle>
  )
}

export default Estrellas