import React, { useContext } from 'react';

import glasses from '../assets/all-glasses.png';
import arrow from '../assets/arrow.png';
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
        <p>Des lunettes qui n’en font qu’à votre tête !</p>
      </div>
      <div className="bottom-home__img">
        <img src={luneticCity} alt="lunetic-city" />
      </div>
      <div className="bottom-home__paragraph-bottom">
        <p>
          <span className="text-grey">Wake up !</span>
          <br />
          Notre première collection
        </p>
      </div>
      <div className="bottom-home__glasses-news">
        <div className="bottom-home__glasses">
          <img src={glasses} alt="list-glasses" />
        </div>
        <div className="bottom-home__news">
          <div className="bottom-home__container-text-arrow">
            <p>News</p>
            <div className="bottom-home__arrow">
              <img src={arrow} alt="arrow" />
            </div>
            <div className="bottom-home__points" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHome;
