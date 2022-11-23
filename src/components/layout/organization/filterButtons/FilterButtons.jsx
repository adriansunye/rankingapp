import React from "react";
import FilterButton from "./filterButton/FilterButton";

const FilterButtons = () => {
  return (
    <>
      <div className="container d-flex gap-1">
        <FilterButton text="Mejores" />
        <FilterButton text="Peores" />
        <FilterButton text="Web" />
        <FilterButton text="Desktop" />
      </div>
    </>
  );
};

export default FilterButtons;
