import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

import gout from '../assets/gout-little.png';
import CarouselGlasses from './CarouselGlasses';
import Maps from './Maps';
import WhatIsLunetic from './WhatIsLunetic';
import PositionYContext from '../contexts/PositionY';
import Sidebar from './Sidebar';
import BottomHome from './BottomHome';
import { Link } from 'react-router-dom';

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
                    <h1>
                      Hanoi Designers
                      <br />
                      Meetup
                    </h1>
                    <div className="home__underline-orange" />
                  </div>
                  <div className="home__paragraph">
                    <p>
                      Lorem Ipsum is simply dummy text of the
                      <br />
                      printing and typesetting industry.{' '}
                      <span className="black-text">Lorem Ipsum</span>
                      <br /> has been the industry&apos;s standard dumm
                    </p>
                  </div>
                </div>
                <div className="home__right">
                  <img src={gout} alt="gout" />
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
                <p>slide 2</p>
              </div>
              <div className="home__carousel-3">
                <p>slide 3</p>
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
