import React from "react";
import CurrentOffersCards from "../CurrentOffersCards/CurrentOffersCards";
import "./CurrentOffers.scss";

function CurrentOffers(props) {
  return (
    <div className="currentOffersContainer" id="currentOffers">
      {" "}
      <h2>nos offres du moment</h2>
      <CurrentOffersCards />
    </div>
  );
}

export default CurrentOffers;
