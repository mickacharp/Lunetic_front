import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import baskFlag from '../assets/baskFlag.jpg';
import orangeLine from '../assets/ligne_orange.png';
import greyLineMedium from '../assets/moyen-trait-gris.png';
import greyCircleLittle from '../assets/petit-cercle-gris.png';
import greyLineLittle from '../assets/petit-trait-gris.png';
import greyLineVertical from '../assets/trait-vertical-gris.png';
import PositionYContext from '../contexts/PositionY';
import IConcept from '../interfaces/IConcept';
import Sidebar from './Sidebar';

const Concept = () => {
  const { setNumberDiv1, setNumberDiv2, setNumberDiv3, setNumberDiv4, setNumberDiv5 } =
    useContext(PositionYContext);
  const [conceptImg, setConceptImg] = useState<IConcept>();

  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/concept-images`)
      .then((response) => response.data)
      .then(([data]) => setConceptImg(data));
  }, []);

  return (
    <>
      <Sidebar anchor={5} />
      <div
        className="conceptContainer"
        id="1"
        ref={(el) => {
          if (!el) return;
          setNumberDiv1(el.getBoundingClientRect().top);
        }}>
        <div className="conceptContainer__mainLogoConcept">
          <img src={conceptImg && conceptImg?.main_img} alt="main concept img" />
        </div>
        <div className="conceptContainer__subtitles">Concept</div>
        <h3 className="conceptContainer__conceptIntro">
          Des lunettes qui n’en font qu’à votre tête !
        </h3>

        <p className="conceptContainer__p">
          Voir <br />
          En couleur
        </p>

        <div
          className="conceptContainer__visuelConcept"
          id="2"
          ref={(el) => {
            if (!el) return;
            setNumberDiv2(el.getBoundingClientRect().top + 500);
          }}>
          <img src={conceptImg && conceptImg?.img1} alt="concept content img1" />
        </div>

        <div className="conceptContainer__conceptDescription">
          <p>
            Des <strong>styles iconiques</strong> pour{' '}
            <strong>souligner la personnalité</strong> des clients, tout en proposant une
            monture design, légère et confortable. Notre première collection «{' '}
            <strong>Wake-up</strong> » se veut fun et pop pour réveiller notre quotidien.
            Elle s’articule autour de 15 formes et 15 couleurs, ajustables selon les
            attentes des opticiens et souhaits de leurs clients.
          </p>
          <p>
            Une <strong>ambition éco-responsable</strong> : Nos montures sont fabriquées à
            la commande, un impact direct sur la réduction des stocks. En réduisant le
            nombre d’intermédiaires, notre production se veut vertueuse. Nous maximisons
            nos interactions avec les acteurs de notre territoire et espérons pouvoir
            bientôt proposer une lunette et un packaging 100% « made in Pays Basque ».
            Nous utilisons l’état de l’art des techniques d’impression additive (3D) et
            notamment utilisons des matériaux biosourcés.
          </p>

          <div className="conceptContainer__baskFlag">
            <img src={baskFlag} alt="Drapeau basque" />{' '}
          </div>
        </div>

        <div className="conceptContainer__orangeLine1" id="3">
          <img src={orangeLine} alt="Ligne orange" />
        </div>

        <div className="conceptContainer__scanPics">
          <img src={conceptImg && conceptImg?.img2} alt="concept content img2" />
        </div>

        <div className="conceptContainer__orangeLine2">
          <img src={orangeLine} alt="Ligne orange" />
        </div>

        <div className="conceptContainer__conceptDescription" id="conceptDescription2">
          <p>
            Parce que nous avons tous une morphologie différente, nous proposons une
            monture sur mesure en combinant un algorithme de calcul à une application
            mobile. Notre application mobile, permet à l’opticien de scanner le visage de
            son client pour le modéliser en 3D, de choisir ensemble un modèle de monture
            dans la collection créée par nos designers et de lui faire essayer
            instantanément virtuellement la monture ajustée à son visage.
          </p>
          <p>
            Nous avons développé <strong>Facetech®</strong> : notre processus de bout en
            bout. Il inclue le code permettant l’agrégation des points de mesure du scan
            du visage du client et l’algorithme compilant les données pour l’ajustement
            des montures en sur mesure.
          </p>
        </div>

        <div
          id="4"
          ref={(el) => {
            if (!el) return;
            setNumberDiv3(el.getBoundingClientRect().top + 1000);
          }}
        />

        <div className="conceptContainer__conceptLogos">
          <img
            src={conceptImg && conceptImg?.left_img3}
            alt="concept content left img3"
          />
          <img
            src={conceptImg && conceptImg?.right_img3}
            alt="concept content right img3"
          />
        </div>

        <div id="5" />

        <p className="conceptContainer__catchphrase">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical.
        </p>

        <div className="conceptContainer__verticalLine">
          <img src={greyLineVertical} alt="Ligne verticale grise" />
        </div>

        <div className="conceptContainer__littleCircle">
          <img src={greyCircleLittle} alt="Petit cercle gris" />
        </div>

        <div className="conceptContainer__greyLine1">
          <img src={greyLineLittle} alt="Petite ligne oblique grise" />
        </div>

        <div className="conceptContainer__greyLine2">
          <img
            src={greyLineMedium}
            alt="Grande ligne oblique grise"
            ref={(el) => {
              if (!el) return;
              setNumberDiv4(el.getBoundingClientRect().top + 1500);
            }}
          />
        </div>

        <div className="conceptContainer__conceptBottomVisual">
          <img src={conceptImg && conceptImg?.video} alt="concept bottom img" />
        </div>

        <div className="conceptContainer__greyLine3">
          <img src={greyLineMedium} alt="Grande ligne oblique grise" />
        </div>
      </div>
      <div
        ref={(el) => {
          if (!el) return;
          setNumberDiv5(el.getBoundingClientRect().top + 2500);
        }}
      />
    </>
  );
};

export default Concept;
