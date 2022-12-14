import React, {useState} from 'react'
import { PuntuarStyle, EstrellasPuntos } from '@components/layout/organization/estrellas/estrellasStyles.js'



const Estrellas = () => {

  const [ rating ] = useState(JSON.parse(localStorage.getItem('clickedItem')).rating) 

const rows = []

for(let i = 0; i < 5 ; i++){

  if( i < rating ){
   rows.push( <EstrellasPuntos key={i + "-estrella"} isvotars className="me-2" mode="on"/>)
  } else{
  rows.push( <EstrellasPuntos key={i + "-estrella"} isvotars className="me-2" mode=""/>)}
}

  return (
<PuntuarStyle isVotar>
  {rows}
</PuntuarStyle>
  )
}

export default Estrellas