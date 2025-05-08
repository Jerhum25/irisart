import React from "react";
import currentOffers from "../../data/currentOffers.json";
import CurrentOffersCard from "../CurrentOffersCard/CurrentOffersCard";
import "./CurrentOffersCards.scss";

function CurrentOffersCards(props) {
  return (
    <div className="currentOffersCardsContainer">
      {currentOffers.map((item, index) => (
        <CurrentOffersCard
          key={index}
          title={item.title}
          discount={item.discount}
          date={item.date}
          infoSup={item.infoSup}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default CurrentOffersCards;
