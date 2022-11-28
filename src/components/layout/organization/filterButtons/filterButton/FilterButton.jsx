import { FilterButtonStyled } from './FilterButtonStyles'


const FilterButton = (props) => {
  return (
    <>
      <FilterButtonStyled className="btn-large pr-5">{props.text}</FilterButtonStyled>
    </>
  )
}

export default FilterButton