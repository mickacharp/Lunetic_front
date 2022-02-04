import React from 'react';

const ModelsDetails1 = ({ text }: any) => {
  return (
    <div className="modelsDetails1">
      <p className="modelsDetails1__number1">01</p>
      <div className="modelsDetails1__text1">
        <p>{text}</p>
        {/* <button className="modelsDetails1__btn">See more &#x2794;</button> */}
      </div>
    </div>
  );
};

export default ModelsDetails1;
