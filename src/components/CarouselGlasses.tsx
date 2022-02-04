import React, { useContext, useState } from 'react';

import PositionYContext from '../contexts/PositionY';
import glassesCarousel1 from '../assets/F1_N4_ROUGE_3.png';
import glassesCarousel2 from '../assets/F2_N3_JAUNE_2.png';
import glassesCarousel3 from '../assets/F6_N2_BLEU_4.png';

const CarouselGlasses = () => {
  const [checked, setChecked] = useState(true);
  const { setNumberDiv3 } = useContext(PositionYContext);

  // Detect when the user clicked on the video in the carrousel
  document.addEventListener('DOMContentLoaded', function () {
    const checkedInput = document.getElementById('s2') as HTMLInputElement;
    setChecked(checkedInput.checked);
  });

  return (
    <div className="carouselGlasses">
      <h2 className="carouselGlasses__title">Nos montures</h2>
      <section className="carouselGlasses__slider">
        <input type="radio" name="slider" id="s1" className="carouselGlasses__radio" />
        <input
          type="radio"
          name="slider"
          id="s2"
          className="carouselGlasses__radio"
          defaultChecked={checked}
        />
        <input type="radio" name="slider" id="s3" className="carouselGlasses__radio" />
        <label htmlFor="s1" id="slide1">
          <img
            src={glassesCarousel1}
            alt="Lunettes rouges"
            height="100%"
            width="100%"
            onClick={() => setChecked(false)}
            onKeyPress={() => setChecked(false)}
            tabIndex={0}
            role="button"
            aria-pressed="false"
          />
        </label>
        <label
          htmlFor="s2"
          id="slide2"
          onClick={() => setChecked(true)}
          onKeyPress={() => setChecked(true)}
          tabIndex={0}
          role="button"
          aria-pressed="false">
          <img src={glassesCarousel2} alt="goutte" height="100%" width="100%" />{' '}
        </label>
        {/* <div className={checked ? '' : 'pointer-events'}> */}
        {/* <video controls height="100%" width="100%">
              <track default kind="captions" srcLang="en" src={video} />
              <source src={video} type="video/mp4" />
            </video> */}

        {/* <label
            htmlFor="s3"
            id="slide3"
            onClick={() => setChecked(false)}
            onKeyPress={() => setChecked(false)}>
            <img src={glassesCarousel2} alt="goutte" height="100%" width="100%" />
          </label> */}
        {/* </div> */}
        {/* </label> */}
        <label
          htmlFor="s3"
          id="slide3"
          onClick={() => setChecked(false)}
          onKeyPress={() => setChecked(false)}
          role="button">
          <img src={glassesCarousel3} alt="goutte" height="100%" width="100%" />
        </label>
      </section>
      <div className="carouselGlasses__orange-line" />
      <div className="carouselGlasses__grey-points" />
      <div className="carouselGlasses__little-grey-circle" />
      <div className="carouselGlasses__grey-quotes" />
      <div
        className="carouselGlasses__little-grey-line"
        ref={(el) => {
          if (!el) return;
          setNumberDiv3(el.getBoundingClientRect().top + 800);
        }}
      />
      <div className="carouselGlasses__little-grey-circle--2" id="4" />
    </div>
  );
};

export default CarouselGlasses;
