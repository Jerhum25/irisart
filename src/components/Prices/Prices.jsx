import PricesCards from '../PricesCards/PricesCards';
import './Prices.scss';
import React from 'react';

function Prices(props) {
   return (
      <div className='pricesContainer' id='prices'>
        <h2>nos tarifs</h2>
        <PricesCards/>

      </div>
   );
}

export default Prices;