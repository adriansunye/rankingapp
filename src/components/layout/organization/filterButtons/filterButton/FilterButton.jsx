import React from 'react'
import { FilterButtonStyles } from './FilterButtonStyles'


const FilterButton = (props) => {
  return (
    <>
      <FilterButtonStyles className="btn-large pr-5">{props.text}</FilterButtonStyles>
    </>
  )
}

export default FilterButton