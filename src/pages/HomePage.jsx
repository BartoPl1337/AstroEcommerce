import React from "react";
import NavBar from "../components/NavBar";
import HeroSec from "../components/HeroSec";
import ShopCategorySec from "../components/ShopCategorySec";
import FeaturesSec from "../components/FeaturesSec";
import DiscountSec from "../components/DiscountSec";
import CustomersOpinionSec from "../components/CustomersOpinionSec";
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
