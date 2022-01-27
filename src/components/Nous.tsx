import React, { useContext } from 'react';

import collaborateurs from '../assets/collaborateurs.png';
import ellipse from '../assets/ellipse.png';
import picto_goutte from '../assets/goutte-trait.png';
import ligneOblique from '../assets/ligne-oblique-grise.png';
import logo from '../assets/LUNETIC.png';
import picto_lunettes from '../assets/LUNETIC_Lunette_v2.png';
import rectangle1 from '../assets/Rectangle-gris-1.png';
import rectangle2 from '../assets/Rectangle-gris-2.png';
import PositionYContext from '../contexts/PositionY';
import Sidebar from './Sidebar';
import leVillage from '../assets/le-village.png';
import partenaires from '../assets/partenaires-lunetic.png';

const Nous = () => {
  const { setNumberDiv1, setNumberDiv2, setNumberDiv3, setNumberDiv4 } =
    useContext(PositionYContext);

  return (
    <>
      <Sidebar anchor={4} />
      <div
        className="nous"
        id="1"
        ref={(el) => {
          if (!el) return;
          setNumberDiv1(el.getBoundingClientRect().top);
        }}>
        <img
          className="nous__picto_goutte"
          src={picto_goutte}
          alt="picto-goutte-lunetic"
        />
        <h2 className="nous__h2">Nous</h2>

        <img className="nous__rectangle1" src={rectangle1} alt="" />
        <img className="nous__rectangle2" src={rectangle2} alt="" />

        <div className="nous__subtitles">
          <h3 className="nous__h3">Des opticiens nouvelle génération !</h3>
          <p className="nous__p">
            Optique <br />
            <br />
            Design, Technologie
          </p>
        </div>

        <img
          className="nous__collaborateurs"
          src={collaborateurs}
          alt="collaborateurs-lunetic"
          id="2"
          ref={(el) => {
            if (!el) return;
            setNumberDiv2(el.getBoundingClientRect().top + 800);
          }}
        />
        <p className="nous__intro_bio">
          Nous sommes des opticiens nouvelle génération, à la fois créateurs/designers,
          fabricants et distributeurs. Nous rassemblons un savoir-faire d’opticien
          créateur designer et des briques technologiques afin de proposer une expérience
          d’achat de lunettes inédite et unique, qui s’adapte aux réels besoins des
          clients et aux nouvelles tendances de consommation. Au travers de cette nouvelle
          expérience d’achat, nous cherchons également à produire de façon responsable,
          respectueuse et locale.
        </p>
        <div
          className="nous__miniBioContainer"
          id="3"
          ref={(el) => {
            if (!el) return;
            setNumberDiv3(el.getBoundingClientRect().top + 2000);
          }}>
          <p className="nous__bio3">
            <h3>David Beddok</h3>
            # 20 ans d’expérience dans l’optique. <br />
            # Créateurs de 3 marques de lunettes. <br />
            # A désigné de nombreuses collections de montures (Optique & Solaire). <br />#
            Lancement de 2 magasins d’optique dont un concept store à Paris.
          </p>
          <p className="nous__bio2">
            <h3>Deborah Beddok</h3># 20 ans d’expérience dans l’innovation digitale.{' '}
            <br /># A créé et dirigé une joint-venture entre 2 acteurs majeurs de leurs
            secteurs. <br /> # A créé et dirigé le Lab d’innovation digitale d’un leader
            européen de la vente à distance. <br /> # Actuellement en charge de l’Open
            innovation de la filiale française d’un leader mondial de la santé.
          </p>
          <p className="nous__bio5">
            <h3>Serge Govindin</h3>
            # 15 ans d’expérience dans le Design produit et industriel. <br /># 6 ans
            d’expérience dans la fabrication additive. <br /> # A désigné de nombreuses
            gammes de produits dans l’aménagement ferroviaire et s’est récemment
            spécialisé dans le design de dispositifs médicaux.
          </p>
          <p className="nous__bio4">
            <h3>Martial Naudin</h3># Spécialisé depuis plus de 20 ans dans le lancement
            commercial d’offres et de services. <br /> # accompagne des projets ambitieux
            ainsi que leurs équipes pour définir leurs stratégies et concevoir leurs
            offres.
          </p>
          <p className="nous__bio1">
            <h3>Eric Tougard</h3>
            # Créateur de 2 entreprises dans le développement d’application digitales.
            <br /># spécialisé dans l’intégration de technologie de scan et d’imagerie 3D.
          </p>
        </div>
        <img className="nous__ligne_oblique_1" src={ligneOblique} alt="" />
        <img
          className="nous__picto_lunettes"
          src={picto_lunettes}
          alt="lunetic-lunettes"
          id="4"
          ref={(el) => {
            if (!el) return;
            setNumberDiv4(el.getBoundingClientRect().top + 1900);
          }}
        />

        <h3 className="nous__h3">Partenaires</h3>

        <img src={ellipse} alt="" className="nous__ellipse" />

        <div className="nous__partenaires">
          <img src={leVillage} alt="le-village" className="nous__logo" />
          <img
            src={partenaires}
            alt="partenaires-lunetic"
            className="nous__logos_partenaires"
          />
        </div>
        <img className="nous__ligne_oblique_2" src={ligneOblique} alt="" />
      </div>
    </>
  );
};

export default Nous;
