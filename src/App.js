import React from 'react'
import './App.scss';


import PublicRoute from '@components/routing/PublicRoute/PublicRoute';


/* -----START componente de pop-up valoracion --- */
import { useState } from 'react';


/* START Crear una APP */
import CreateApp from '@components/layout/organization/createApp/CreateApp.jsx'
/* END Crear una APP */

import Apps from "@store/objects/appsEs"
import Opinions from "@store/opinions/opinions"


function App() {

  const [data] = useState(Apps.data.apps);
  if (!localStorage.getItem("data")) {
    console.log(data)
    for (const obj of data) {
      obj.opinions = Opinions;
      obj.type = Math.floor(Math.random() * 3);
    }
    localStorage.setItem("data", JSON.stringify(data))
  }

    
  return (
    <>
      <PublicRoute />

      <CreateApp />
      
   

    </>
  );
}

export default App;