import React from 'react'
import { useState } from 'react';
import './App.scss';
import {Search} from '@components/layout/navigation/Search/Search';
import FilterButtons from './components/layout/organization/filterButtons/FilterButtons';
import AppView from './views/AppView';
import Valoracion from '@components/layout/organization/valoracion/Valoracion'
import Button from 'react-bootstrap/Button';


function App() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      <FilterButtons/>
      <AppView/>
      <Search/>
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
    </div>
  );
}

export default App;
