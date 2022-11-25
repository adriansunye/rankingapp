
import { useState, useEffect } from "react";
import Apps from "@store/objects/appsEs";
import Application from "./Filtro_f";
import { Card } from "react-bootstrap";

function FiltrO ({setRating, setView, setFiltered}) {
    const [filtered, setFiltered] = useState([]);
    const [rating, setRating] = useState([0]);
    const [view, setView] = useState ([0]);
    
    useEffect (() => { 
        set(Apps.data.apps.sort((a,b) => (a.rating > b.rating) ? 1 : -1 ))
        
        ;
        /* (Apps.data.apps.rating.sort((a, b) => (a.app_rating > b.app_rating) ? 1 : -1)) */
    } );

setFiltered()
setRating()
setView()





    return (
    <>
        <div className= "filter-conteiner">
            <FiltrO mejores = {mejores} setFiltered = {setFiltered}/>
            <div className = "mejores-apps">
{mejores.map(Apps => {

})}
            <button onCClick = {() => setRating(5)}>MEJORES</button> 
             <button  onCClick = {() => setRating(1)}>PEORES</button> 
              <button  onCClick = {() => setView("web")}>WEB</button>
              <button  onCClick = {() => setView()}>MOBILE</button>
              </div>
            </div>
            </>
    );
}
export default FiltrO;