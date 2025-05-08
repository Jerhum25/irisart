import './CurrentOffersCard.scss';
import React from 'react';

function CurrentOffersCard({title, discount, date, infoSup, price}) {
   return (
      <div className='currentOffersCardContainer'>
            <h3>{title}</h3>
            <p>{discount}</p>
            <p>{date}</p>
            <p>{infoSup}</p>
            <p>{price}€</p>

      </div>
   );
}

export default CurrentOffersCard;