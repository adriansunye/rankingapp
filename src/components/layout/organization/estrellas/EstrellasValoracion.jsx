import React, {useState} from 'react'
import { PuntuarStyle, EstrellasPuntos } from '@components/layout/organization/estrellas/estrellasStyles.js'



const EstrellasValoracion = (props) => {

  const [ rating ] = useState(props.rat) 

const rows = []

for(let i = 0; i < 5 ; i++){

  if( i < rating ){
   rows.push( <EstrellasPuntos key={i + "-estrellaValor"} className="me-2" mode="on"/>)
  } else{
  rows.push( <EstrellasPuntos key={i + "-estrellaValor"} className="me-2" mode=""/>)}
}

  return (
<PuntuarStyle>
  {rows}
</PuntuarStyle>
  )
}

export default EstrellasValoracion