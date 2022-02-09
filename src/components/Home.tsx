import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React, { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import homeVideo from '../videos/home-video-carousel2.mp4';
import PositionYContext from '../contexts/PositionY';
import BottomHome from './BottomHome';
import CarouselGlasses from './CarouselGlasses';
import Maps from './Maps';
import Sidebar from './Sidebar';
import WhatIsLunetic from './WhatIsLunetic';
import ICarousel from '../interfaces/ICarousel';

const Home = () => {
  const { setNumberDiv1 } = useContext(PositionYContext);
  const [carouselData, setCarouselData] = useState<ICarousel>();

  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/carousels`)
      .then((response) => response.data)
      .then(([data]) => setCarouselData(data));
  }, []);

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
                    <div className="left-arrow-home" />
                  </button>
                );
              }}
              renderArrowNext={(clickHandler) => {
                return (
                  <button onClick={clickHandler} onKeyDown={clickHandler}>
                    <div className="right-arrow-home" />
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
                      <br className="breakline" /> mesure : style, couleur, légèreté…
                      adaptées
                      <br className="breakline" /> à chaque visage !
                    </p>
                  </div>
                  <Link to="news">
                    <div className="home__cube-responsive">
                      <h2>News</h2>
                      <div className="home__arrow-responsive" />
                    </div>
                  </Link>
                </div>
                <div className="home__right">
                  <div className="home__right--img">
                    <img
                      src={carouselData && carouselData?.img_top1}
                      alt="carousel top 1"
                    />
                  </div>
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
                  <source
                    src={(carouselData && carouselData?.video) || homeVideo}
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="home__carousel-3">
                <div className="home__carousel-3--img">
                  <img
                    src={carouselData && carouselData?.img_top3}
                    alt="carousel bottom 3"
                  />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <WhatIsLunetic />
      {carouselData && <CarouselGlasses carouselData={carouselData} />}
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
