import React from 'react';
import luneticCity from '../assets/lunetic-city.png';
import glasses from '../assets/all-glasses.png';

const BottomHome = () => {
  return (
    <div className="bottom-home">
      <div className="bottom-home__paragraph-top">
        <p>
          Contrary to popular belief. Lorem Ipsum is not simply
          <br />
          random text. It has roots in a piece of classical.
        </p>
      </div>
      <div className="bottom-home__img">
        <img src={luneticCity} alt="lunetic-city" />
      </div>
      <div className="bottom-home__paragraph-bottom">
        <p className="first-part">you maybe</p>
        <div className="bottom-home__like">
          <p>like</p>
          <div className="bottom-home__underline" />
        </div>
      </div>
      <div className="bottom-home__glasses-news">
        <div className="bottom-home__glasses">
          <img src={glasses} alt="list-glasses" />
        </div>
        <div className="bottom-home__news">
          <p>News</p>
          <div className="bottom-home__arrow" />
          <div className="bottom-home__points" />
        </div>
      </div>
    </div>
  );
};

export default BottomHome;
