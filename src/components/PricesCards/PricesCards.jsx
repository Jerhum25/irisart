import React from "react";
import prices from "../../data/prices.json";
import PricesCard from "../PricesCard/PricesCard";
import "./PricesCards.scss";

function PricesCards(props) {
  return (
    <div className="pricesCardsContainer">
      {prices.map((item, index) => (
        <PricesCard
          key={index}
          title={item.title}
          info1={item.infos.info1}
          info2={item.infos.info2}
          info3={item.infos.info3}
          info4={item.infos.info4}
          info5={item.infos.info5}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default PricesCards;
