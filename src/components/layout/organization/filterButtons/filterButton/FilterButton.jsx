import { FilterButtonStyled } from './FilterButtonStyles'

const FilterButton = (props) => {
  return (
    <>
      <FilterButtonStyled id={props.id} onClick={event => props.handleClick(event)} className="btn-large pr-5">{props.text}</FilterButtonStyled>
    </>
  )
}

export default FilterButton