import React from 'react';

import lunettesPresentation1 from '../assets/FOND_BLANC_GENERAL_LUNETTE_7_NOIR.png';
import pictoGoutte from '../assets/gout-little.png';
import lunettesEric from '../assets/LUNETTE_01_ERIC.png';
import lunettesSimon from '../assets/LUNETTE_02_SIMON.png';
import lunettesArthur from '../assets/LUNETTE_03_ARTHUR.png';
import lunettesDavid from '../assets/LUNETTE_04_DAVID.png';
import lunettesLilou from '../assets/LUNETTE_06_LILOU.png';
import MonturesDetails1 from './MonturesDetails1';
import MonturesDetails2 from './MonturesDetails2';

const Montures = () => {
  return (
    <div className="montures">
      <div className="montures__headLunettes1">
        <img src={lunettesEric} alt="Monture Eric" />
      </div>
      <div className="montures__headLunettes2">
        <img src={lunettesSimon} alt="Monture Simon" />
      </div>
      <div className="montures__headLunettes3">
        <img src={lunettesLilou} alt="Monture Lilou" />
      </div>

      <div className="montures__headLunettes4">
        <img src={lunettesArthur} alt="Monture Arthur" />
      </div>

      <div className="montures__headLunettes5">
        <img src={lunettesDavid} alt="Monture David" />
      </div>

      <div className="montures__subtitles">Nos montures</div>

      <div className="montures__pictoGoutte">
        <img src={pictoGoutte} alt="Picto goutte" />
      </div>

      <div className="montures__presentation1">
        <MonturesDetails1 />
      </div>

      <div className="montures__presentation2">
        <MonturesDetails2 />
      </div>

      <div className="montures__lunettesPresentation1">
        <img src={lunettesPresentation1} alt="Lunettes présentation 1" />
      </div>
    </div>
  );
};

export default Montures;
