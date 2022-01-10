// import conceptVideo1 from '';
import React from 'react';

// import ReactPlayer from 'react-player';
import visuelConcept from '../assets/concept_image2.png';
import conceptPicLunettes from '../assets/concept_Lunettes.png';
import conceptBottomVisual from '../assets/concept_visuel_bas.png';
import logoVisageConcept from '../assets/PICTO GOUTTE_SCAN_2.png';
import Sidebar from './Sidebar';

const Concept = () => {
  return (
    <div className="conceptContainer">
      <div className="conceptContainer__mainLogoConcept">
        <img src={logoVisageConcept} alt="Logo visage page concept" />
      </div>
      <div className="conceptContainer__pageTitle">Concept</div>
      <p className="conceptContainer__conceptIntro">Hey! We host all events near you!</p>
      <div className="conceptContainer__visuelConcept">
        <img src={visuelConcept} alt="Visuel concept Lunetic" />
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
      <div className="conceptContainer__conceptVideo">
        {/* <ReactPlayer url={conceptVideo2} /> */}
      </div>
      <p className="conceptContainer__catchphrase">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
        a piece of classical.
      </p>
      <div className="conceptContainer__conceptBottomVisual">
        <img src={conceptBottomVisual} alt="Lunettes page concept" />
      </div>
      <Sidebar />
    </div>
  );
};

export default Concept;
