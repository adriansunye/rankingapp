import React from 'react'
import AppDetailsContent from '@components/layout/organization/appDetailsContent/appDetailsContent'
import Footer from '@components/layout/navigation/Footer/Footer';
import NavBar from '@components/layout/navigation/NavBar/NavBar';

const Detail = () => {
  return (
    <>
      <NavBar className="fixed-top"/>
      <AppDetailsContent />
      <Footer />
    </>
  )
}

export default Detail;