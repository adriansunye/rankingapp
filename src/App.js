import React from 'react'
import './App.scss';
import PublicRoute from '@components/routing/PublicRoute/PublicRoute';
import { useState } from 'react';
import Apps from "@store/objects/appsEs"
import Opinions from "@store/opinions/opinions"


function App() {

  const [data] = useState(Apps.data.apps);

  //* si no existe data en localStorage, recorre el array y añade opiniones por defecto y tipo de app (numero del 1 al 3), luego añade data al localStorage
  if (!localStorage.getItem("data")) {
    for (const obj of data) {
      obj.opinions = Opinions;
      obj.type = Math.floor(Math.random() * 3);
    }
    localStorage.setItem("data", JSON.stringify(data))
  }

    
  return (
    <>
      <PublicRoute />
    </>
  );
}

export default App;