import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import NewsCard from './NewsCard';

const News = () => {
  return (
    <div className="news">
      <div className="news__close-container">
        <Link to="/">
          <p className="news__close">FERMER</p>
        </Link>
      </div>

      <Carousel
        infiniteLoop
        stopOnHover
        showArrows={false}
        showStatus={true}
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
        <div className="news__carousel-1">
          <NewsCard />
        </div>
        <div className="news__carousel-2">
          <NewsCard />
        </div>
        <div className="news__carousel-3">
          <NewsCard />
        </div>
      </Carousel>
    </div>
  );
};

export default News;
