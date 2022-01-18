import React from 'react';

import visuelConcept from '../assets/concept_image2.png';
import conceptPicLunettes from '../assets/concept_Lunettes.png';
import conceptBottomVisual from '../assets/concept_visuel_bas.png';
import orangeLine from '../assets/ligne_orange.png';
import greyLineMedium from '../assets/moyen-trait-gris.png';
import greyCircleLittle from '../assets/petit-cercle-gris.png';
import greyLineLittle from '../assets/petit-trait-gris.png';
import logoVisageConcept from '../assets/PICTO GOUTTE_SCAN_2.png';
import greyLineVertical from '../assets/trait-vertical-gris.png';
import scanPics from '../assets/concept_scanPics.png';
import baskFlag from '../assets/baskFlag.jpg';

import conceptVideo1 from '../videos/video-1.mp4';

const Concept = () => {
  return (
    <div className="conceptContainer">
      <div className="conceptContainer__mainLogoConcept">
        <img src={logoVisageConcept} alt="Logo visage page concept" />
      </div>
      <div className="conceptContainer__subtitles">Concept</div>
      <h3 className="conceptContainer__conceptIntro">
        Des lunettes qui n’en font qu’à votre tête !
      </h3>

      <p className="conceptContainer__p">
        Voir <br />
        En couleur
      </p>

      <div className="conceptContainer__visuelConcept">
        <img src={visuelConcept} alt="Visuel concept Lunetic" />
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
          nombre d’intermédiaires, notre production se veut vertueuse. Nous maximisons nos
          interactions avec les acteurs de notre territoire et espérons pouvoir bientôt
          proposer une lunette et un packaging 100% « made in Pays Basque ». Nous
          utilisons l’état de l’art des techniques d’impression additive (3D) et notamment
          utilisons des matériaux biosourcés.
        </p>

        <div className="conceptContainer__baskFlag">
          <img src={baskFlag} alt="Drapeau basque" />{' '}
        </div>
      </div>

      <div className="conceptContainer__orangeLine1">
        <img src={orangeLine} alt="Ligne orange" />
      </div>

      <div className="conceptContainer__scanPics">
        <img src={scanPics} alt="Scan visage" />
      </div>

      <div className="conceptContainer__orangeLine2">
        <img src={orangeLine} alt="Ligne orange" />
      </div>

      <div className="conceptContainer__conceptDescription" id="conceptDescription2">
        <p>
          Parce que nous avons tous une morphologie différente, nous proposons une monture
          sur mesure en combinant un algorithme de calcul à une application mobile. Notre
          application mobile, permet à l’opticien de scanner le visage de son client pour
          le modéliser en 3D, de choisir ensemble un modèle de monture dans la collection
          créée par nos designers et de lui faire essayer instantanément virtuellement la
          monture ajustée à son visage.
        </p>
        <p>
          Nous avons développé <strong>Facetech®</strong> : notre processus de bout en
          bout. Il inclue le code permettant l’agrégation des points de mesure du scan du
          visage du client et l’algorithme compilant les données pour l’ajustement des
          montures en sur mesure.
        </p>
      </div>

      <div className="conceptContainer__conceptVideo">
        <video controls height="100%" width="100%">
          <source src={conceptVideo1} type="video/mp4" />
        </video>
      </div>

      <p className="conceptContainer__catchphrase">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
        a piece of classical.
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
        <img src={greyLineMedium} alt="Grande ligne oblique grise" />
      </div>

      <div className="conceptContainer__conceptBottomVisual">
        <img src={conceptBottomVisual} alt="Lunettes page concept" />
      </div>

      <div className="conceptContainer__greyLine3">
        <img src={greyLineMedium} alt="Grande ligne oblique grise" />
      </div>
    </div>
  );
};

export default Concept;
