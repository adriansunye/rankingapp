import React from 'react'
import './App.scss';


import FilterButtons from '@components/layout/organization/filterButtons/FilterButtons';
import AppView from './views/AppView';

/* -----START componente de pop-up valoracion --- */
import { useState } from 'react';
import Valoracion from '@components/layout/organization/valoracion/Valoracion'
import Button from 'react-bootstrap/Button';
/* -----END componente de pop-up valoracion --- */

import CreateApp  from '@components/layout/organization/createApp/CreateApp.jsx'


function App() {

  const [modalShow, setModalShow] = useState(false); /* añadir en el render de la vista */

  return (
    <>

      <CreateApp/>
      <FilterButtons/>


      <AppView/>




      <>

  
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

      <Valoracion 
        title="Valoración"
        comentario="Escribe tu valoración...."
        estrellas="star"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      
    </>

    </>
  );
}

export default App;