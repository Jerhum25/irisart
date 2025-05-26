import AboutUs from "../../components/AboutUs/AboutUs";
import Contact from "../../components/Contact/Contact";
import CurrentOffers from "../../components/CurrentOffers/CurrentOffers";
import PrestationDetails from "../../components/PrestationDetails/PrestationDetails";
import Prices from "../../components/Prices/Prices";
import SlideShow from "../../components/SlideShow/SlideShow";
import "./Accueil.scss";

function Accueil(props) {
  return (
    <div className="accueilContainer" id="home">
      <SlideShow />
      <AboutUs />
      <PrestationDetails />
      <CurrentOffers />
      <Prices />
      <Contact />
    </div>
  );
}

export default Accueil;
