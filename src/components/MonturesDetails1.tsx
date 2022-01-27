import React from 'react';

const MonturesDetails1 = ({ text }: any) => {
  return (
    <div className="monturesDetails1">
      <p className="monturesDetails1__number1">01</p>
      <div className="monturesDetails1__text1">
        <p>{text}</p>
        <button className="monturesDetails1__btn">See more &#x2794;</button>
      </div>
    </div>
  );
};

export default MonturesDetails1;
