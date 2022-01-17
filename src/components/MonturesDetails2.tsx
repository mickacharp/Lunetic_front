import React from 'react';
import orangeQuotes from '../assets/orange-quotes.png';

const MonturesDetails2 = () => {
  return (
    <div className="monturesDetails2">
      <div className="monturesDetails2__number2">02</div>
      <div className="monturesDetails2__orangeQuotes">
        <img src={orangeQuotes} alt="Quotes oranges" />
      </div>
      <div className="monturesDetails2__text2">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC, making it over 2000 years
          old. Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia.
        </p>
        <button className="monturesDetails2__btn">See more &#x2794;</button>
      </div>
    </div>
  );
};

export default MonturesDetails2;
