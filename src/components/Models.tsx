import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import PositionYContext from '../contexts/PositionY';
import IModelsImg from '../interfaces/IModelsImg';
import ModelsDetails1 from './ModelsDetails1';
import ModelsDetails2 from './ModelsDetails2';
import Sidebar from './Sidebar';

const Models = () => {
  const { setNumberDiv1, setNumberDiv2, setNumberDiv3, setNumberDiv4 } =
    useContext(PositionYContext);
  const [modelsImg, setModelsImg] = useState<IModelsImg>();

  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/models-images`)
      .then((response) => response.data)
      .then(([data]) => setModelsImg(data));
  }, []);

  return (
    <>
      <Sidebar anchor={4} />
      <div
        className="models"
        id="1"
        ref={(el) => {
          if (!el) return;
          setNumberDiv1(el.getBoundingClientRect().top);
        }}>
        <div className="models__headGlasses1">
          <img src={modelsImg && modelsImg?.main_img1} alt="main model 1" />
        </div>
        <div className="models__headGlasses2">
          <img src={modelsImg && modelsImg?.main_img2} alt="main model 2" />
        </div>
        <div className="models__headGlasses3">
          <img src={modelsImg && modelsImg?.main_img3} alt="main model 3" />
        </div>

        <div className="models__headGlasses4">
          <img src={modelsImg && modelsImg?.main_img4} alt="main model 4" />
        </div>

        <div className="models__headGlasses5">
          <img src={modelsImg && modelsImg?.sidetitle_img1} alt="sidetitle img 1" />
        </div>

        <div
          className="models__subtitles"
          id="2"
          ref={(el) => {
            if (!el) return;
            setNumberDiv2(el.getBoundingClientRect().top);
          }}>
          Nos montures
        </div>

        <div className="models__pictoGoutte">
          <img src={modelsImg && modelsImg?.sidetitle_img2} alt="sidetitle img 2" />
        </div>

        <div className="models__presentationText1">
          <ModelsDetails1
            text="Nos montures sont fabriquées sur mesure, à la commande.
          L’ensemble de la collection est imaginée dans notre studio créatif du Sud-ouest par des opticiens designers."
          />
        </div>

        <div className="models__glassesPresentation1">
          <img src={modelsImg && modelsImg?.page_img1} alt="glasses presentation 1" />
        </div>

        <div className="models__presentationText2">
          <ModelsDetails2
            text="Elles sont réalisées en impression 3D, à partir de matériaux biosourcés, issus de Ricin. 
        Nos chutes de productions sont recyclées dans de futures montures."
          />
        </div>

        <div className="models__glassesCenter1">
          <img src={modelsImg && modelsImg?.page_img2} alt="glasses center 1" />
        </div>

        <div className="models__glassesPresentation2">
          <img src={modelsImg && modelsImg?.middle_img1} alt="glasses presentation 2" />
        </div>

        <div className="models__presentation3" id="3">
          <div className="models__presentationText3">
            <ModelsDetails1 text="Notre première collection « Wake-up » se veut fun et pop pour réveiller notre quotidien." />
          </div>

          <div className="models__pictoGoutteScan">
            <img src={modelsImg && modelsImg?.middle_img2} alt="Picto goutte scan" />
          </div>
        </div>

        <div className="models__glassesCenter2">
          <img src={modelsImg && modelsImg?.main_bottom_img} alt="glasses center 2" />
        </div>

        <div
          className="models__presentationText4"
          ref={(el) => {
            if (!el) return;
            setNumberDiv3(el.getBoundingClientRect().top);
          }}>
          <ModelsDetails2 text="Nous avons conçu une application qui permet de concevoir instantanément une monture unique, redimensionnée au visage du client et adaptée à ses choix.." />
        </div>

        <div className="models__subtitlesStart" id="4">
          START SHOPPING NOW
        </div>

        <div className="models__presentationText5">
          <ModelsDetails2 text="Contrary to popular belief, Lorem Ipsum is not  simply random text. It has roots in a piece of  classical Latin literature from 45 BC, making it over  2000 years old." />
        </div>

        <div className="models__presentationText6">
          <ModelsDetails2 text="Contrary to popular belief, Lorem Ipsum is not  simply random text. It has roots in a piece of  classical Latin literature from 45 BC, making it over  2000 years old." />
        </div>

        <div className="models__presentationText7">
          <ModelsDetails2 text="Contrary to popular belief, Lorem Ipsum is not  simply random text. It has roots in a piece of  classical Latin literature from 45 BC, making it over  2000 years old." />
        </div>

        <div className="models__glassesBottom1">
          <img src={modelsImg && modelsImg?.bottom_img1} alt="Model bottom 1" />
        </div>

        <div className="models__glassesBottom2">
          <img src={modelsImg && modelsImg?.bottom_img2} alt="Model bottom 2" />
        </div>

        <div
          className="models__glassesBottom3"
          ref={(el) => {
            if (!el) return;
            setNumberDiv4(el.getBoundingClientRect().top + 4000);
          }}>
          <img src={modelsImg && modelsImg?.bottom_img3} alt="Model bottom 3" />
        </div>
      </div>
    </>
  );
};

export default Models;
