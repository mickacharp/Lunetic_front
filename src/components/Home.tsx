import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import gout from '../assets/gout-little.png';
import CarouselGlasses from './CarouselGlasses';
import Maps from './Maps';
import WhatIsLunetic from './WhatIsLunetic';

const Home = () => {
  return (
    <>
      <div className="home">
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
                      <br /> has been the industry's standard dumm
                    </p>
                    {/* <div className="home__underline-black-1" />
                <div className="home__underline-black-2" /> */}
                  </div>
                </div>
                <div className="home__right">
                  <img src={gout} alt="illustration goutte" />
                  <div className="home__cube">
                    <h2>News</h2>
                    <div className="home__arrow" />
                    <div className="home__points" />
                  </div>
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
      <Maps />
    </>
  );
};

export default Home;
