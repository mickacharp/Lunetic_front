import React, { useContext } from 'react';

import glasses from '../assets/all-glasses.png';
import luneticCity from '../assets/lunetic-city.png';
import PositionYContext from '../contexts/PositionY';

const BottomHome = () => {
  const { setNumberDiv5 } = useContext(PositionYContext);

  return (
    <div
      className="bottom-home"
      id="5"
      ref={(el) => {
        if (!el) return;
        setNumberDiv5(el.getBoundingClientRect().top + 3000);
      }}>
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
