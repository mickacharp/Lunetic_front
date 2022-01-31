import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import INews from '../interfaces/INews';
import NewsCard from './NewsCard';

const News = () => {
  const [newsData1, setNewsData1] = useState<Array<INews>>([]);
  const [newsData2, setNewsData2] = useState<Array<INews>>([]);
  const [newsData3, setNewsData3] = useState<Array<INews>>([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/news/1')
      .then((res) => res.data)
      .then((data) => setNewsData1(data));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/news/2')
      .then((res) => res.data)
      .then((data) => setNewsData2(data));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/news/3')
      .then((res) => res.data)
      .then((data) => setNewsData3(data));
  }, []);

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
          <NewsCard
            title={newsData1.title}
            subtitle={newsData1.subtitle}
            text={newsData1.text}
            link_picture={newsData1.link_picture}
          />
        </div>

        <div className="news__carousel-2">
          <NewsCard
            title={newsData2.title}
            subtitle={newsData2.subtitle}
            text={newsData2.text}
            link_picture={newsData2.link_picture}
          />
        </div>

        <div className="news__carousel-3">
          <NewsCard
            title={newsData3.title}
            subtitle={newsData3.subtitle}
            text={newsData3.text}
            link_picture={newsData3.link_picture}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default News;
