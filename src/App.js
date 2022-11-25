import React from 'react'
import { useState } from 'react';
import PublicRoute from '@components/routing/PublicRoute/PublicRoute';
import './App.scss';
import FilterButtons from './components/layout/organization/filterButtons/FilterButtons';
import AppView from './views/AppView';
import Valoracion from '@components/layout/organization/valoracion/Valoracion'
import Button from 'react-bootstrap/Button';


function App() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <FilterButtons/>
      <AppView/>
      <PublicRoute/>
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