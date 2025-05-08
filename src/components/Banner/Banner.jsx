import './Banner.scss';
import React from 'react';

function Banner(props) {
   return (
      <div className='bannerContainer'>
        <img src="./assets/images/iris.jpeg" alt="banner image" />
        <a className="cta" href="#currentOffers">Nos offres du moment</a>

      </div>
   );
}

export default Banner;