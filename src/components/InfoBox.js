import React from 'react';
import screen from '../assets/screen1.png';
import screen2 from '../assets/screen2.png';
import screen3 from '../assets/screen3.png';
import screen4 from '../assets/screen4.png';

const InfoBox = () => {
  return(
    <div className="infobox__container">
      <h2 className="infobox__title">Trophy <span className="infobox__title--blue">Leagues</span></h2>
      <p className="infobox__description">
        Info... Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.
      </p>
      <div className="infobox__saleContainer">
        <div className="infobox__saleSubtitle">
          Be the first
        </div>
        <div className="infobox__saleTitle">
          <span className="infobox__saleTitle--first">Kick</span>
          <span className="infobox__saleTitle--second">Starter</span>
        </div>
      </div>
      <div className="infobox__container">
        <img src={screen3} className="infobox__screen" alt="Captura del juego" />
        <img src={screen3} className="infobox__screen" alt="Captura del juego" />
        <img src={screen3} className="infobox__screen" alt="Captura del juego" />
        <img src={screen3} className="infobox__screen" alt="Captura del juego" />
      </div>
    </div>
  )
}

export default InfoBox;