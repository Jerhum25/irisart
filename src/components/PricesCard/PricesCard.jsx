import React from "react";
import prices from "../../data/prices.json";
import "./PricesCard.scss";

function PricesCard({ title, info1, info2, info3, info4, info5, price }) {
  return (
    <div className="pricesCardContainer">
      <h3>{title}</h3>
      <ul className="description">
        <li>{info1}</li>
        <li>{info2}</li>
        <li>{info3}</li>
        <li>{info4}</li>
        <li>{info5}</li>
        <li>{price}€</li>
      </ul>
    </div>
  );
}

export default PricesCard;
