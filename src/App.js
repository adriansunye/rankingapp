/* 
 import PublicRoute from '@components/routing/PublicRoute/PublicRoute';  */
import './App.scss';
import Navbar from "./components/layout/navigation/NavBar/Navbar";
import Filter from "../src/components/forms/filtro1/Filtro1";


/* import styled from 'styled-components';*/

/*  import {Search} from '@components/layout/navigation/Search/Search';  */

function App() {
  return (
    <div className = "App">
   
       <Navbar/>
       <Filter/>
  {/*    <FiltrO/> */}
    </div>
  );
}

export default App;