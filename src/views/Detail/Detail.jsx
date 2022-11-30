import React from 'react'
import AppDetailsContent from '@components/layout/organization/appDetailsContent/appDetailsContent'
import Footer from '@components/layout/navigation/Footer/Footer';
import NavBar from '@components/layout/navigation/NavBar/Navbar';

const Detail = () => {
  return (
    <>
      <NavBar />
      <AppDetailsContent />
      <Footer />
    </>
  )
}

export default Detail;