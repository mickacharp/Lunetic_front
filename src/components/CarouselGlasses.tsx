import React, { useRef, useState } from 'react';
import glasses from '../assets/LUNETTE_03_ARTHUR.png';
import video from '../videos/video-1.mp4';

const CarouselGlasses = () => {
  const [checked, setChecked] = useState(true);
  document.addEventListener('DOMContentLoaded', function () {
    const checkedInput = document.getElementById('s2') as HTMLInputElement;
    setChecked(checkedInput.checked);
  });

  return (
    <div className="carouselGlasses">
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
            src="https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true"
            alt="glasses"
            height="100%"
            width="100%"
            onClick={() => setChecked(false)}
          />
        </label>
        <label htmlFor="s2" id="slide2" onClick={() => setChecked(true)}>
          <div className={checked ? '' : 'pointer-events'}>
            <video controls height="100%" width="100%">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </label>
        <label htmlFor="s3" id="slide3" onClick={() => setChecked(false)}>
          <img src={glasses} alt="glasses" height="100%" width="100%" />
        </label>
      </section>
    </div>
  );
};

export default CarouselGlasses;
