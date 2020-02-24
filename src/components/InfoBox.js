import React, {useState} from 'react';
import screen0 from '../assets/screens/home.jpg';
import screen1 from '../assets/screens/alineacion.jpg';
import screen3 from '../assets/screens/clasificacion.jpg';
import screen4 from '../assets/screens/economia.jpg';
import screen5 from '../assets/screens/infraestructuras.jpg';
import screen6 from '../assets/screens/mercado.jpg';
import screen7 from '../assets/screens/scouting.jpg';
import screen8 from '../assets/screens/training_individual.jpg';
import kickstarter from '../assets/kikcstarter.png';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

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
        {images.map((img, index) => {
          return <img src={img} key={index} className="infobox__screen" alt="Captura del juego" onClick={() => openLightbox(index)} />
        })}
      </div>
    </div>
  )
}

export default InfoBox;