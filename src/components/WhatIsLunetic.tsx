import React, { useContext } from 'react';

import pictoGout1 from '../assets/picto-gout.png';
import pictoGout2 from '../assets/picto-gout-2.png';
import PositionYContext from '../contexts/PositionY';

const WhatIsLunetic = () => {
  const { setNumberDiv2 } = useContext(PositionYContext);
  return (
    <div className="whatIsLunetic">
      <div className="whatIsLunetic__subtitle">
        <div className="whatIsLunetic__container">
          <p className="whatIsLunetic__p">
            enjoy
            <br />
            your life
          </p>
          <p className="whatIsLunetic__middle">Hey! We host all events near you!</p>
        </div>
        <div className="whatIsLunetic__medium-square" />
        <div className="whatIsLunetic__little-square" />
      </div>
      <div className="whatIsLunetic__content">
        <div className="whatIsLunetic__number-one">
          <div className="whatIsLunetic__grey-quotes" />
          <div className="whatIsLunetic__number">
            <p>01</p>
          </div>
          <div className="whatIsLunetic__textContent">
            <p>
              Contrary to popular belief, Lorem Ipsum is
              <br />
              not simply random text. It has roots in a piece
              <br />
              of classical Latin literature from 45 BC,
              <br /> making it over 2000 years old.
            </p>
            <div className="whatIsLunetic__btn-more">
              <p>See More</p>
              <div className="whatIsLunetic__arrow-btn" />
              <div className="whatIsLunetic__underline" />
            </div>
          </div>
        </div>
        <div className="whatIsLunetic__text">
          <p>
            C&apos;est
            <br />
            quoi
            <br />
            Lunetic
            <br />?
          </p>
          <div className="whatIsLunetic__grey-points" />
        </div>
        <div className="whatIsLunetic__picto">
          <div className="whatIsLunetic__grey-line" />
          <div className="whatIsLunetic__plane" id="3" />
        </div>
        <div className="whatIsLunetic__number-two">
          <div className="whatIsLunetic__number">
            <p>02</p>
          </div>
          <div className="whatIsLunetic__orange-quotes" />
          <div className="whatIsLunetic__textContent-2">
            <p>
              Contrary to popular belief, Lorem Ipsum is
              <br />
              not simply random text. It has roots in a piece
              <br />
              of classical Latin literature from 45 BC,
              <br />
              making it over 2000 years old. Richard
              <br />
              McClintock, a Latin professor at Hampden-
              <br />
              Sydney College in Virginia.
            </p>
            <div className="whatIsLunetic__btn-more-2">
              <p>See More</p>
              <div className="whatIsLunetic__arrow-btn" />
              <div className="whatIsLunetic__underline" />
            </div>
          </div>
        </div>
        <div className="whatIsLunetic__picto-gout-1">
          <div
            className="whatIsLunetic__square-grey-points"
            id="2"
            ref={(el) => {
              if (!el) return;
              setNumberDiv2(el.getBoundingClientRect().top);
            }}
          />
          <div className="whatIsLunetic__line-orange" />
          <img src={pictoGout1} alt="picto-gout" />
        </div>
        <div className="whatIsLunetic__picto-gout-2">
          <img src={pictoGout2} alt="picto-gout" />
          <div className="whatIsLunetic__line-orange-2" />
        </div>
        <div className="whatIsLunetic__picto-quotes">
          <div className="whatIsLunetic__picto-grey-quotes" />
        </div>
        <div className="whatIsLunetic__picto-ellispe">
          <div className="whatIsLunetic__ellipse" />
        </div>
      </div>
    </div>
  );
};

export default WhatIsLunetic;
