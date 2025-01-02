import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Viewed from '../components/ProductPageComponents/Viewed'
import Shopping from '../components/ShoppingComponents/Shopping'
const ShoppingPage = () => {
  return (
    <>
        <NavBar />
        <Shopping />
        <Viewed />
        <Footer />
    </>
  )
}

export default ShoppingPage