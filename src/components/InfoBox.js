import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Lightbox from 'react-image-lightbox';
import {useForceUpdate} from '../Hooks/useForceUpdate';
import CookieConsent from "react-cookie-consent";
import {HomeLang} from '../langs/langs';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import screen0 from '../assets/screens/home.jpg';
import screen1 from '../assets/screens/economia.jpg';
import screen2 from '../assets/screens/infraestructuras.jpg';
import screen3 from '../assets/screens/training_individual.jpg';
import screen4 from '../assets/screens/alineacion.jpg';
import screen5 from '../assets/screens/clasificacion.jpg';
import screen6 from '../assets/screens/mercado.jpg';
import screen7 from '../assets/screens/scouting.jpg';
import kickstarter from '../assets/kikcstarter.png';

const InfoBox = () => {
  const forceUpdate = useForceUpdate()
  const lang = useSelector(state => state.front.lang)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [Home, setHomeLang] = useState(HomeLang);
  const images = [
    screen0, screen1, screen2, screen3, screen4, screen5, screen6, screen7
  ];
  
  function openLightbox(index) {
    setPhotoIndex(index)
    setLightboxOpen(true)
  }

  useEffect(() => {
    Home.setLanguage(lang)
    forceUpdate()
  }, [lang])
  
  return(
    <div className="infobox__container">
      <CookieConsent
          location="bottom"
          buttonText={Home.cookieConfirm}
          cookieName="TrophyCookies"
          style={{ background: "rgba(0, 188, 215, 0.77)" }}
          buttonStyle={{ background: "#fff", fontSize: "13px" }}
          expires={150}
      >
          {Home.cookies}
      </CookieConsent>
      {lightboxOpen && <Lightbox mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setLightboxOpen(false )}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          />}
      <h2 className="infobox__title">Trophy<span className="infobox__title--blue">Leagues</span></h2>
      <p className="infobox__description">
          {Home.info}        
      </p>
      <div className="infobox__saleContainer">
        <div className="infobox__saleSubtitle">
          {Home.callToAction}
        </div>
        <div className="infobox__saleTitle">
          <img src={kickstarter} alt="Start now" />
          {/* <span className="infobox__saleTitle--first">Kick</span>
          <span className="infobox__saleTitle--second">Starter</span> */}
        </div>
      </div>
      <div className="infobox__screensContainer">
        {images.map((img, index) => {
          return <img src={img} key={index} className="infobox__screen" alt="Captura del juego" onClick={() => openLightbox(index)} />
        })}
      </div>
    </div>
  )
}

export default InfoBox;