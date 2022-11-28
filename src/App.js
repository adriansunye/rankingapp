import React from 'react'
import './App.scss';


import PublicRoute from '@components/routing/PublicRoute/PublicRoute';
import FilterButtons from '@components/layout/organization/filterButtons/FilterButtons';

/* -----START componente de pop-up valoracion --- */
import { useState } from 'react';
import Valoracion from '@components/layout/organization/valoracion/Valoracion'
import Button from 'react-bootstrap/Button';
import Estrellas from '@components/layout/organization/estrellas/Estrellas.jsx'
/* -----END componente de pop-up valoracion --- */


/* START Crear una APP */
import CreateApp  from '@components/layout/organization/createApp/CreateApp.jsx'
/* END Crear una APP */

import Apps from "@store/objects/appsEs"


function App() {

  const [modalShow, setModalShow] = useState(false); /* REQUERIMIENTO: añadir en el render de la vista para poder ejecutar el pop-up de valoración*/

  const [data] = useState(Apps.data.apps);
    for(const obj of data) {
        obj.opinions = ["me sirve", "una mierda"];
        obj.type = Math.floor(Math.random() * 3);
    }
    localStorage.setItem("data", JSON.stringify(data))
  return (
    <>
      <PublicRoute/>

      <CreateApp/>
      <FilterButtons/>
 







      <>

  {/* Ejecutar modal de valoracion START */}
        <Button className="bnt-star" onClick={() => setModalShow(true)}>
          <Estrellas/>
        </Button>

{/* pop-up de valoracion */}
      <Valoracion 
        title="Valoración"
        comentario="Escribe tu valoración...."
        estrellas="star"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

  {/* Ejecutar modal de valoracion END */}      
    </>

    </>
  );
}

export default App;