import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Product from '../components/ProductPageComponents/Product'
import Opinions from '../components/ProductPageComponents/Opinions'
import Viewed from '../components/ProductPageComponents/Viewed'
const ProductPage = () => {
  return (
    <>
        <NavBar />
        <Product />
        <Opinions />
        <Viewed />
        <Footer />
    </>
  )
}

export default ProductPage