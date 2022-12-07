import FilterButton from "@components/layout/organization/filterButtons/filterButton/FilterButton.jsx";

const FilterButtons = ({handleClick}) => {
  return (
    <>
      <div className="container justify-content-center d-flex gap-1 mt-2">
                <FilterButton id="mejores" handleClick={handleClick} text="Mejores" />
                <FilterButton id="intermedios"  handleClick={handleClick} text="Intermedios" />
                <FilterButton id="peores"  handleClick={handleClick} text="Peores" />
                <FilterButton id="web"  handleClick={handleClick} text="Web" />
                <FilterButton id="desktop"  handleClick={handleClick} text="Desktop" />
            </div>
    </>
  );
};

export default FilterButtons;
