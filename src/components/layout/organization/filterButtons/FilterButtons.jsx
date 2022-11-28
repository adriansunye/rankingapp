import FilterButton from "./filterButton/FilterButton";
import { useState } from "react";

const FilterButtons = () => {
  const [ setFilterObject ] = useState([])

  const handleClick = (event) => {  
    let filtro;
    switch(""){
      case "mejores":
        filtro = (JSON.parse(localStorage.getItem("data")).sort((a,b) => (a.rating > b.rating) ? 1 : -1 ))
      break;
      case "peores":
        filtro = (JSON.parse(localStorage.getItem("data")).sort((a,b) => (a.rating < b.rating) ? 1 : -1 ))
      break;
      default:
    }
      setFilterObject(filtro.slice(0,10));
  }
  
  return (
    <>
      <div className="container d-flex gap-1 mt-5">
        <FilterButton handleClick={handleClick} text="Mejores" />
        <FilterButton text="Peores" />
        <FilterButton text="Web" />
        <FilterButton text="Desktop" />
      </div>
    </>
  );
};

export default FilterButtons;
