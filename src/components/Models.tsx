import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ModelsDetailBleu from '../assets/DETAIL_1_LUNETTE_4_BLEU.png';
import ModelsDetailGris from '../assets/DETAIL_1_LUNETTE_5_GRIS.png';
import ModelsDetailRouge from '../assets/DETAIL_1_LUNETTE_7_ROUGE.png';
import ModelsProfilNoir1 from '../assets/FOND_BLANC_GENERAL_LUNETTE_1_NOIR.png';
import ModelsProfilRouge1 from '../assets/FOND_BLANC_GENERAL_LUNETTE_5_ROUGE.png';
import glassesPresentation1 from '../assets/FOND_BLANC_GENERAL_LUNETTE_7_NOIR.png';
import pictoGoutte from '../assets/gout-little.png';
import glassesEric from '../assets/LUNETTE_01_ERIC.png';
import glassesSimon from '../assets/LUNETTE_02_SIMON.png';
import glassesArthur from '../assets/LUNETTE_03_ARTHUR.png';
import glassesDavid from '../assets/LUNETTE_04_DAVID.png';
import glassesLilou from '../assets/LUNETTE_06_LILOU.png';
import pictoGoutteScan from '../assets/PICTO GOUTTE_SCAN_fond blanc.png';
import PositionYContext from '../contexts/PositionY';
import ModelsDetails1 from './ModelsDetails1';
import ModelsDetails2 from './ModelsDetails2';
import Sidebar from './Sidebar';

const Models = () => {
  const { setNumberDiv1, setNumberDiv2, setNumberDiv3, setNumberDiv4 } =
    useContext(PositionYContext);

  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
          <img src={glassesEric} alt="Model Eric" />
        </div>
        <div className="models__headGlasses2">
          <img src={glassesSimon} alt="Model Simon" />
        </div>
        <div className="models__headGlasses3">
          <img src={glassesLilou} alt="Model Lilou" />
        </div>

        <div className="models__headGlasses4">
          <img src={glassesArthur} alt="Model Arthur" />
        </div>

        <div className="models__headGlasses5">
          <img src={glassesDavid} alt="Model David" />
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
          <img src={pictoGoutte} alt="Picto goutte" />
        </div>

        <div className="models__presentationText1">
          <ModelsDetails1
            text="Nos montures sont fabriquées sur mesure, à la commande.
          L’ensemble de la collection est imaginée dans notre studio créatif du Sud-ouest par des opticiens designers."
          />
        </div>

        <div className="models__glassesPresentation1">
          <img src={glassesPresentation1} alt="glasses presentation 1" />
        </div>

        <div className="models__presentationText2">
          <ModelsDetails2
            text="Elles sont réalisées en impression 3D, à partir de matériaux biosourcés, issus de Ricin. 
        Nos chutes de productions sont recyclées dans de futures montures."
          />
        </div>

        <div className="models__glassesCenter1">
          <img src={glassesSimon} alt="Model Simon" />
        </div>

        <div className="models__glassesPresentation2">
          <img src={ModelsProfilRouge1} alt="glasses presentation 2" />
        </div>

        <div className="models__presentation3" id="3">
          <div className="models__presentationText3">
            <ModelsDetails1 text="Notre première collection « Wake-up » se veut fun et pop pour réveiller notre quotidien." />
          </div>

          <div className="models__pictoGoutteScan">
            <img src={pictoGoutteScan} alt="Picto goutte scan" />
          </div>
        </div>

        <div className="models__glassesCenter2">
          <img src={ModelsProfilNoir1} alt="Model center 2" />
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
          <img src={ModelsDetailBleu} alt="Model bottom 1" />
        </div>

        <div className="models__glassesBottom2">
          <img src={ModelsDetailGris} alt="Model bottom 2" />
        </div>

        <div
          className="models__glassesBottom3"
          ref={(el) => {
            if (!el) return;
            setNumberDiv4(el.getBoundingClientRect().top + 4000);
          }}>
          <img src={ModelsDetailRouge} alt="Model bottom 3" />
        </div>
      </div>
    </>
  );
};

export default Models;
