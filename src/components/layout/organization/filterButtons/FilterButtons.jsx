import FilterButton from "./FilterButton/FilterButton";
import { useState } from "react";

const FilterButtons = ({handleClick}) => {
  return (
    <>
      <div className="container d-flex gap-1 mt-5">
                <FilterButton id="mejores" handleClick={handleClick} text="Mejores" />
                <FilterButton id="peores"  handleClick={handleClick} text="Peores" />
                <FilterButton id="web"  handleClick={handleClick} text="Web" />
                <FilterButton id="desktop"  handleClick={handleClick} text="Desktop" />
            </div>
    </>
  );
};

export default FilterButtons;