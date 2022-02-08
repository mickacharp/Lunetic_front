import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import INews from '../interfaces/INews';
import NewsCard from './NewsCard';

const News = () => {
  const [newsData, setNewsData] = useState<INews[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/news')
      .then((res) => res.data)
      .then((data) => setNewsData(data));
  }, []);

  return (
    <div className="news-component-container">
      <div className="news">
        <div className="news__close-container">
          <Link to="/">
            <p className="news__close">FERMER</p>
          </Link>
        </div>
        <div className="news__carousel-container">
          <Carousel
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
            {newsData &&
              newsData.map((news, index) => (
                <div className={`news__carousel-${index + 1} alone`} key={news.id_news}>
                  <NewsCard
                    title={news.title}
                    subtitle={news.subtitle}
                    text={news.text}
                    link_picture={news.link_picture}
                  />
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default News;
