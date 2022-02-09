import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PositionYContext from '../contexts/PositionY';
import IUs from '../interfaces/IUs';
import Sidebar from './Sidebar';

import ellipse from '../assets/ellipse.png';
import leVillage from '../assets/le-village.png';
import ligneOblique from '../assets/ligne-oblique-grise.png';
import picto_lunettes from '../assets/LUNETIC_Lunette_v2.png';
import rectangle1 from '../assets/Rectangle-gris-1.png';
import rectangle2 from '../assets/Rectangle-gris-2.png';

const Us = () => {
  const { setNumberDiv1, setNumberDiv2, setNumberDiv3, setNumberDiv4 } =
    useContext(PositionYContext);
  const [usImg, setUsImg] = useState<IUs>();

  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/us-images`)
      .then((response) => response.data)
      .then(([data]) => setUsImg(data));
  }, []);

  return (
    <>
      <Sidebar anchor={4} />
      <div
        className="us"
        id="1"
        ref={(el) => {
          if (!el) return;
          setNumberDiv1(el.getBoundingClientRect().top);
        }}>
        <img
          className="us__picto_goutte"
          src={usImg && usImg?.main_img}
          alt="main us img"
        />
        <h2 className="us__h2">Nous</h2>

        <img className="us__rectangle1" src={rectangle1} alt="" />
        <img className="us__rectangle2" src={rectangle2} alt="" />

        <div className="us__subtitles">
          <h3 className="us__main-subtitle">Des opticiens nouvelle génération !</h3>
          <p className="us__p">
            Optique <br />
            Design, Technologie
          </p>
        </div>

        <img
          className="us__collaborateurs"
          src={usImg && usImg?.middle_img}
          alt="middle us img"
          id="2"
          ref={(el) => {
            if (!el) return;
            setNumberDiv2(el.getBoundingClientRect().top + 800);
          }}
        />
        <p className="us__intro_bio">
          Nous sommes des opticiens nouvelle génération, à la fois créateurs/designers,
          fabricants et distributeurs. Nous rassemblons un savoir-faire d’opticien
          créateur designer et des briques technologiques afin de proposer une expérience
          d’achat de lunettes inédite et unique, qui s’adapte aux réels besoins des
          clients et aux nouvelles tendances de consommation. Au travers de cette nouvelle
          expérience d’achat, nous cherchons également à produire de façon responsable,
          respectueuse et locale.
        </p>
        <div
          className="us__miniBioContainer"
          id="3"
          ref={(el) => {
            if (!el) return;
            setNumberDiv3(el.getBoundingClientRect().top + 2000);
          }}>
          <div className="us__bio3">
            <h3>David Beddok</h3>
            <p>
              # 20 ans d’expérience dans l’optique. <br />
              # Créateurs de 3 marques de lunettes. <br /># A désigné de nombreuses
              collections de montures (Optique &amp; Solaire). <br /># Lancement de 2
              magasins d’optique dont un concept store à Paris.
            </p>
          </div>
          <div className="us__bio2">
            <h3>Deborah Beddok</h3>
            <p>
              # 20 ans d’expérience dans l’innovation digitale. <br /># A créé et dirigé
              une joint-venture entre 2 acteurs majeurs de leurs secteurs. <br /> # A créé
              et dirigé le Lab d’innovation digitale d’un leader européen de la vente à
              distance. <br /> # Actuellement en charge de l’Open innovation de la filiale
              française d’un leader mondial de la santé.
            </p>
          </div>
          <div className="us__bio5">
            <h3>Serge Govindin</h3>
            <p>
              # 15 ans d’expérience dans le Design produit et industriel. <br /># 6 ans
              d’expérience dans la fabrication additive. <br /> # A désigné de nombreuses
              gammes de produits dans l’aménagement ferroviaire et s’est récemment
              spécialisé dans le design de dispositifs médicaux.
            </p>
          </div>
          <div className="us__bio4">
            <h3>Martial Naudin</h3>
            <p>
              # Spécialisé depuis plus de 20 ans dans le lancement commercial d’offres et
              de services. <br /> # Accompagne des projets ambitieux ainsi que leurs
              équipes pour définir leurs stratégies et concevoir leurs offres.
            </p>
          </div>
          <div className="us__bio1">
            <h3>Eric Tougard</h3>
            <p>
              # Créateur de 2 entreprises dans le développement d’application digitales.
              <br /># Spécialisé dans l’intégration de technologie de scan et d’imagerie
              3D.
            </p>
          </div>
        </div>
        <img className="us__ligne_oblique_1" src={ligneOblique} alt="" />
        <img
          className="us__picto_lunettes"
          src={picto_lunettes}
          alt="lunetic-lunettes"
          id="4"
          ref={(el) => {
            if (!el) return;
            setNumberDiv4(el.getBoundingClientRect().top + 1900);
          }}
        />

        <h2 className="us__h2">Partenaires</h2>

        <img src={ellipse} alt="" className="us__ellipse" />

        <div className="us__partenaires">
          <img src={leVillage} alt="le-village" className="us__logo" />
          <img
            src={usImg && usImg?.partners_img}
            alt="bottom us partners img"
            className="us__logos_partenaires"
          />
        </div>
        <img className="us__ligne_oblique_2" src={ligneOblique} alt="" />
      </div>
    </>
  );
};

export default Us;
