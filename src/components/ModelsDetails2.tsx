import React from 'react';

import orangeQuotes from '../assets/orange-quotes.png';

const ModelsDetails2 = ({ text }: any) => {
  return (
    <div className="modelsDetails2">
      <div className="modelsDetails2__number2">02</div>
      <div className="modelsDetails2__orangeQuotes">
        <img src={orangeQuotes} alt="Quotes oranges" />
      </div>
      <div className="modelsDetails2__text2">
        <p>{text}</p>
        {/* <button className="modelsDetails2__btn">See more &#x2794;</button> */}
      </div>
    </div>
  );
};

export default ModelsDetails2;
