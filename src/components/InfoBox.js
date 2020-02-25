import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import screen0 from '../assets/screens/home.jpg';
import screen1 from '../assets/screens/alineacion.jpg';
import screen3 from '../assets/screens/clasificacion.jpg';
import screen4 from '../assets/screens/economia.jpg';
import screen5 from '../assets/screens/infraestructuras.jpg';
import screen6 from '../assets/screens/mercado.jpg';
import screen7 from '../assets/screens/scouting.jpg';
import screen8 from '../assets/screens/training_individual.jpg';
import kickstarter from '../assets/kikcstarter.png';

const InfoBox = () => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const images = [
    screen0, screen1, screen3, screen4, screen5, screen6, screen7, screen8
  ];
  
  function openLightbox(index) {
    setPhotoIndex(index)
    setLightboxOpen(true)
  }

  return(
    <div className="infobox__container">
      {lightboxOpen && <Lightbox mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setLightboxOpen(false )}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          />}
      <h2 className="infobox__title">Trophy<span className="infobox__title--blue">Leagues</span></h2>
      <p className="infobox__description">
      <FormattedMessage id="welcome" >
        The game combines the functions of technical direction of the team, training, economic management of the club, stadiums, aesthetics, leagues and a passionate community about soccer.
        Trophy Manager is a massive free browser game in which players manage their own soccer club.
      </FormattedMessage>
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
        {images.map((img, index) => {
          return <img src={img} key={index} className="infobox__screen" alt="Captura del juego" onClick={() => openLightbox(index)} />
        })}
      </div>
    </div>
  )
}

export default InfoBox;