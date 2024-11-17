import React from "react";
import NavBar from "../components/NavBar";
import HeroSec from "../components/HomePageComponents/HeroSec";
import ShopCategorySec from "../components/HomePageComponents/ShopCategorySec";
import FeaturesSec from "../components/HomePageComponents/FeaturesSec";
import DiscountSec from "../components/HomePageComponents/DiscountSec";
import CustomersOpinionSec from "../components/HomePageComponents/CustomersOpinionSec";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSec />
      <ShopCategorySec />
      <FeaturesSec />
      <DiscountSec />
      <CustomersOpinionSec />
      <Footer />
    </>
  );
};

export default HomePage;
