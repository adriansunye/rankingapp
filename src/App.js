/* 
 import PublicRoute from '@components/routing/PublicRoute/PublicRoute';  */
import './App.scss';
import AppDetails from './views/AppDetails';
=======
import Navbar from "./components/layout/navigation/NavBar/Navbar";
import Filter from "../src/components/forms/filtro1/Filtro1";


/* import styled from 'styled-components';*/

/*  import {Search} from '@components/layout/navigation/Search/Search';  */


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
  );
}

export default App;