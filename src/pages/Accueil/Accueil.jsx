import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import "./Accueil.scss";
import CurrentOffers from "../../components/CurrentOffers/CurrentOffers";
import Prices from "../../components/Prices/Prices";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

function Accueil(props) {
  return (
    <div className="accueilContainer" id="home">
      {/* <Header /> */}
      <Banner />
      <AboutUs />
      <CurrentOffers/>
      <Prices/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  );
}

export default Accueil;
