import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React, { useContext, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import goutCarousel1 from '../assets/Home-Goutte_F1_N3_BLANC.png';
import goutCarousel2 from '../assets/Home-Goutte_F2_N1_JAUNE_1.png';
import PositionYContext from '../contexts/PositionY';
import homeVideo from '../videos/home-video-carousel2.mp4';
import BottomHome from './BottomHome';
import CarouselGlasses from './CarouselGlasses';
import Maps from './Maps';
import Sidebar from './Sidebar';
import WhatIsLunetic from './WhatIsLunetic';

const Home = () => {
  const { setNumberDiv1 } = useContext(PositionYContext);

  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Sidebar anchor={5} />
      <div
        className="home"
        id="1"
        ref={(el) => {
          if (!el) return;
          setNumberDiv1(el.getBoundingClientRect().top);
        }}>
        <div className="home__content">
          <div className="home__carousel">
            <Carousel
              autoPlay
              infiniteLoop
              stopOnHover
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              renderArrowPrev={(clickHandler) => {
                return (
                  <button onClick={clickHandler} onKeyDown={clickHandler}>
                    <div className="left-arrow" />
                  </button>
                );
              }}
              renderArrowNext={(clickHandler) => {
                return (
                  <button onClick={clickHandler} onKeyDown={clickHandler}>
                    <div className="right-arrow" />
                  </button>
                );
              }}>
              <div className="home__carousel-1">
                <div className="home__left">
                  <h2 className="home__lunetic">#lunetic</h2>
                  <div className="home__title">
                    <h1>Bonjour !</h1>
                    <div className="home__underline-orange" />
                  </div>
                  <div className="home__paragraph">
                    <p>
                      <span className="black-text">Lunétic</span> créateur de lunettes
                      designs sur
                      <br />
                      mesure : style, couleur, légèreté… adaptées
                      <br />à chaque visage !
                    </p>
                  </div>
                </div>
                <div className="home__right">
                  <img src={goutCarousel1} alt="gout" />

                  <Link to="/news">
                    <div className="home__cube">
                      <h2>News</h2>
                      <div className="home__arrow" />
                      <div className="home__points" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="home__carousel-2">
                <video controls height="100%" width="100%">
                  <source src={homeVideo} type="video/mp4" />
                </video>
              </div>
              <div className="home__carousel-3">
                <img src={goutCarousel2} alt="gout" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <WhatIsLunetic />
      <CarouselGlasses />
      <Maps
        defaultZoom={10}
        defaultCenter={{
          lat: 43.46352270882575,
          lng: -1.511119064793627,
        }}
        mapClassName={'maps_home'}
      />
      <Link to="/news">
        <BottomHome />
      </Link>
    </>
  );
};

export default Home;
