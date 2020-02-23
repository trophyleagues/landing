import React from 'react';
import screen from '../assets/screen1.png';
import screen2 from '../assets/screen2.png';
import screen3 from '../assets/screen3.png';
import screen4 from '../assets/screen4.png';
import kickstarter from '../assets/kikcstarter.png';

const InfoBox = () => {
  return(
    <div className="infobox__container">
      <h2 className="infobox__title">Trophy <span className="infobox__title--blue">Leagues</span></h2>
      <p className="infobox__description">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <div className="infobox__saleContainer">
        <div className="infobox__saleSubtitle">
          Be the first with
        </div>
        <div className="infobox__saleTitle">
          <img src={kickstarter} alt="Start now" />
          {/* <span className="infobox__saleTitle--first">Kick</span>
          <span className="infobox__saleTitle--second">Starter</span> */}
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