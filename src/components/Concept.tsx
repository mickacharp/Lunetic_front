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
// import ReactPlayer from 'react-player';
// import conceptVideo1 from '';

const Concept = () => {
  return (
    <div className="conceptContainer" id="1">
      <div className="conceptContainer__mainLogoConcept">
        <img src={logoVisageConcept} alt="Logo visage page concept" />
      </div>
      <div className="conceptContainer__subtitles">Concept</div>
      <h3 className="conceptContainer__conceptIntro">
        Hey! We host all events near you!
      </h3>

      <p className="conceptContainer__p">
        enjoy <br />
        your life
      </p>

      <div className="conceptContainer__visuelConcept" id="2">
        <img src={visuelConcept} alt="Visuel concept Lunetic" />
      </div>

      <div className="conceptContainer__conceptDescription">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit debitis a porro
          quibusdam! Nulla voluptatibus, ad optio illo praesentium quaerat enim sequi?
          Dolorem rerum aliquid ullam modi? Ad voluptatibus itaque totam maxime nihil iure
          reprehenderit sapiente veritatis recusandae! Ut repellendus natus quas quam
          expedita, in rem facere. Non, suscipit quaerat?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat dolorem sint
          consectetur ea. Sint provident numquam at inventore quasi delectus beatae porro
          harum earum! Quibusdam nisi amet eaque voluptatem ut earum dolorem quaerat
          aspernatur consequatur! Voluptate quibusdam, harum fugit deleniti aperiam est
          saepe similique voluptatem earum accusamus mollitia cupiditate, minima ex
          debitis quasi autem voluptatum facere eius quis in? Magnam.
        </p>
      </div>

      <div className="conceptContainer__orangeLine1" id="3">
        <img src={orangeLine} alt="Ligne orange" />
      </div>

      <div className="conceptContainer__orangeLine2">
        <img src={orangeLine} alt="Ligne orange" />
      </div>

      <div className="conceptContainer__conceptVideo">
        {/* <ReactPlayer url={conceptVideo1} /> */}
      </div>

      <div className="conceptContainer__conceptPicLunettes">
        <img src={conceptPicLunettes} alt="Lunettes page concept" />
      </div>

      <div className="conceptContainer__conceptDescription">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fuga veritatis?
          Quam maxime voluptatem assumenda molestias illo quasi tenetur, necessitatibus
          possimus temporibus eveniet fugiat ducimus sint beatae nemo ullam aut distinctio
          omnis in! Optio voluptates voluptatum asperiores reprehenderit quis cum
          adipisci, voluptate deleniti maiores soluta aspernatur voluptatibus, illo qui
          atque quia, nulla vitae dolore. Minima eveniet nulla, soluta quod iste placeat
          corrupti quaerat assumenda accusantium architecto voluptas animi doloribus!
          Delectus magnam culpa doloribus perspiciatis eum architecto commodi consequuntur
          odio recusandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptate
          adipisci blanditiis nihil veniam unde. Tenetur necessitatibus, suscipit, ab
          nulla, saepe incidunt veritatis quia culpa fugiat eos ex officiis adipisci qui
          eius. Accusantium animi quisquam recusandae commodi cupiditate quibusdam
          consequatur saepe fugiat reiciendis, exercitationem harum voluptatum mollitia.
          Obcaecati tenetur ullam hic nemo laboriosam consectetur aut ex praesentium
          excepturi, sint doloremque at fuga quod eos sapiente saepe illo! Iure nobis eius
          provident quas eum dignissimos voluptatibus excepturi quasi sapiente, quaerat
          rem?
        </p>
      </div>

      <div className="conceptContainer__orangeLine3">
        <img src={orangeLine} alt="Ligne orange" />
      </div>

      <div className="conceptContainer__conceptVideo" id="4">
        {/* <ReactPlayer url={conceptVideo2} /> */}
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
