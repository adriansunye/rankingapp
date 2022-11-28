import React from 'react';
import { useState } from "react";
import Apps from "../../../store/objects/appsEs.json";


function Filter () {

 const [ setFilterObject ] = useState([])

const filtrar = () => {  
   let filtro = 
    (Apps.data.apps.sort((a,b) => (a.rating > b.rating) ? 1 : -1 ))

    setFilterObject(filtro.slice(0,10));

}
const [ setPeoresObject ] = useState([]);

const peores = () => {  
   let filtro2 = 
    (Apps.data.apps.sort((a,b) => (b.rating > a.rating) ? 1 : -1 ))
    setPeoresObject(filtro2.slice(0,10));
    console.log("filtro", filtro2 )
}

return (
<>
<button  onCClick = {filtrar}>MEJORES</button> 
<button  onCClick = {peores}>PEORES</button> 
</>
  )
}
export default Filter;