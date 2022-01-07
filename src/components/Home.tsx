import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import gout from '../assets/gout-little.png';
import Sidebar from './Sidebar';
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
              renderArrowPrev={(clickHandler, hasPrev, label) => {
                return (
                  <span onClick={clickHandler} onKeyDown={clickHandler} role="button">
                    <div className="left-arrow" />
                  </span>
                );
              }}
              renderArrowNext={(clickHandler, hasPrev, label) => {
                return (
                  <span onClick={clickHandler} onKeyDown={clickHandler} role="button">
                    <div className="right-arrow" />
                  </span>
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
                  <img src={gout} alt="picture-gout" />
                  <div className="home__cube">
                    <h2>News</h2>
                    <div className="home__arrow" />
                    <div className="home__points" />
                  </div>
                </div>
              </div>
              <div className="home__carousel-2">
                <p>Comment ça va ?</p>
              </div>
              <div className="home__carousel-3">
                <p>Bien</p>
              </div>
            </Carousel>
          </div>
        </div>
        <Sidebar />
      </div>
      <WhatIsLunetic />
    </>
  );
};

export default Home;
