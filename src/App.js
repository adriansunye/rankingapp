
import PublicRoute from '@components/routing/PublicRoute/PublicRoute';
import './App.scss';


import Apps from "@store/objects/appsEs"
import { useState } from "react";


function App() {
  const [data] = useState(Apps.data.apps);
    for(const obj of data) {
        obj.opinions = ["me sirve", "una mierda"];
        obj.type = Math.floor(Math.random() * 3);
    }
    localStorage.setItem("data", JSON.stringify(data))
  return (


    <>
      <PublicRoute/>
    </>

  );
}

export default App;