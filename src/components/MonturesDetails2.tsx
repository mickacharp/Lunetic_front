import React from 'react';
import orangeQuotes from '../assets/orange-quotes.png';

const MonturesDetails2 = ({ text }) => {
  return (
    <div className="monturesDetails2">
      <div className="monturesDetails2__number2">02</div>
      <div className="monturesDetails2__orangeQuotes">
        <img src={orangeQuotes} alt="Quotes oranges" />
      </div>
      <div className="monturesDetails2__text2">
        <p>{text}</p>
        <button className="monturesDetails2__btn">See more &#x2794;</button>
      </div>
    </div>
  );
};

export default MonturesDetails2;
