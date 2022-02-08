import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import arrowBtn from '../assets/fleche.png';
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
            Voir
            <br />
            en couleur
          </p>
          <p className="whatIsLunetic__middle">
            Des lunettes qui n‘en font qu’à votre tête !​
          </p>
          <div className="whatIsLunetic__square-grey-points2" />
        </div>
        <div className="whatIsLunetic__medium-square" />
        <div className="whatIsLunetic__little-square" />
      </div>
      <div className="whatIsLunetic__content">
        <div className="whatIsLunetic__picto-gout-responsive">
          <img src={pictoGout1} alt="picto-gout" />
        </div>
        <div className="whatIsLunetic__text">
          <p>
            Le
            <br />
            concept
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
        <div className="whatIsLunetic__number-one">
          <div className="whatIsLunetic__container-number-text">
            <div className="whatIsLunetic__grey-quotes" />
            <div className="whatIsLunetic__number">
              <p>01</p>
            </div>
            <div className="whatIsLunetic__textContent">
              <p>
                Des styles iconiques pour souligner la personnalité des clients, tout en
                proposant une monture design, légère et confortable.
              </p>
              <Link to="/concept" className="whatIsLunetic__btn-more">
                <p>En savoir plus</p>
                <div className="whatIsLunetic__arrow-btn">
                  <img src={arrowBtn} alt="arrow" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="whatIsLunetic__number-two">
          <div className="whatIsLunetic__number">
            <p>02</p>
          </div>
          <div className="whatIsLunetic__orange-quotes" />
          <div className="whatIsLunetic__textContent-2">
            <p>
              Eco-conçues, nos montures sont fabriquées à la commande, en France, au Pays
              Basque et nous recyclons nos chutes de production.
            </p>
            <Link to="/concept" className="whatIsLunetic__btn-more">
              <p>En savoir plus</p>
              <div className="whatIsLunetic__arrow-btn">
                <img src={arrowBtn} alt="arrow" />
              </div>
            </Link>
          </div>
        </div>
        <div className="whatIsLunetic__number-three">
          <div className="whatIsLunetic__number">
            <p>03</p>
          </div>
          <div className="whatIsLunetic__orange-quotes" />
          <div className="whatIsLunetic__textContent-2">
            <p>
              Parce que nous avons tous une morphologie différente, nous proposons une
              monture sur mesure en combinant un algorithme de calcul à une application
              mobile.
            </p>
            <Link to="/concept" className="whatIsLunetic__btn-more">
              <p>En savoir plus</p>
              <div className="whatIsLunetic__arrow-btn">
                <img src={arrowBtn} alt="arrow" />
              </div>
            </Link>
          </div>
        </div>
        <div className="whatIsLunetic__picto-gout-responsive">
          <img src={pictoGout2} alt="picto-gout" />
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
