import React from 'react'
import AppDetailsContent from '@components/layout/organization/appDetailsContent/appDetailsContent'
import FilterButtons from '@components/layout/organization/filterButtons/FilterButtons.jsx'
const appView = () => {
  return (
    <>
      <FilterButtons></FilterButtons>
      <AppDetailsContent/>
    </>
  )
}

export default appView