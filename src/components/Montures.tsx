import React from 'react';

import MonturesDetailBleu from '../assets/DETAIL_1_LUNETTE_4_BLEU.png';
import MonturesDetailGris from '../assets/DETAIL_1_LUNETTE_5_GRIS.png';
import MonturesDetailRouge from '../assets/DETAIL_1_LUNETTE_7_ROUGE.png';
import MonturesProfilNoir1 from '../assets/FOND_BLANC_GENERAL_LUNETTE_1_NOIR.png';
import MonturesProfilRouge1 from '../assets/FOND_BLANC_GENERAL_LUNETTE_5_ROUGE.png';
import lunettesPresentation1 from '../assets/FOND_BLANC_GENERAL_LUNETTE_7_NOIR.png';
import pictoGoutte from '../assets/gout-little.png';
import lunettesEric from '../assets/LUNETTE_01_ERIC.png';
import lunettesSimon from '../assets/LUNETTE_02_SIMON.png';
import lunettesArthur from '../assets/LUNETTE_03_ARTHUR.png';
import lunettesDavid from '../assets/LUNETTE_04_DAVID.png';
import lunettesLilou from '../assets/LUNETTE_06_LILOU.png';
import pictoGoutteScan from '../assets/PICTO GOUTTE_SCAN_fond blanc.png';
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

      <div className="montures__presentationText1">
        <MonturesDetails1
          text="Nos montures sont fabriquées sur mesure, à la commande.
          L’ensemble de la collection est imaginée dans notre studio créatif du Sud-ouest par des opticiens designers."
        />
      </div>

      <div className="montures__presentationText2">
        <MonturesDetails2
          text="Elles sont réalisées en impression 3D, à partir de matériaux biosourcés, issus de Ricin. 
        Nos chutes de productions sont recyclées dans de futures montures."
        />
      </div>

      <div className="montures__lunettesPresentation1">
        <img src={lunettesPresentation1} alt="Lunettes présentation 1" />
      </div>

      <div className="montures__lunettesCenter1">
        <img src={lunettesSimon} alt="Monture Simon" />
      </div>

      <div className="montures__lunettesPresentation2">
        <img src={MonturesProfilRouge1} alt="Lunettes présentation 2" />
      </div>

      <div className="montures__presentation3">
        <div className="montures__presentationText3">
          <MonturesDetails1 text="Notre première collection « Wake-up » se veut fun et pop pour réveiller notre quotidien." />
        </div>

        <div className="montures__pictoGoutteScan">
          <img src={pictoGoutteScan} alt="Picto goutte scan" />
        </div>
      </div>

      <div className="montures__lunettesCenter2">
        <img src={MonturesProfilNoir1} alt="Monture centre 2" />
      </div>

      <div className="montures__presentationText4">
        <MonturesDetails2 text="Nous avons conçu une application qui permet de concevoir instantanément une monture unique, redimensionnée au visage du client et adaptée à ses choix.." />
      </div>

      <div className="montures__subtitlesStart">START SHOPPING NOW</div>

      <div className="montures__presentationText5">
        <MonturesDetails2 text="Contrary to popular belief, Lorem Ipsum is not  simply random text. It has roots in a piece of  classical Latin literature from 45 BC, making it over  2000 years old. Richard McClintock, a Latin  professor at Hampden-Sydney College in Virginia." />
      </div>

      <div className="montures__presentationText6">
        <MonturesDetails2 text="Contrary to popular belief, Lorem Ipsum is not  simply random text. It has roots in a piece of  classical Latin literature from 45 BC, making it over  2000 years old. Richard McClintock, a Latin  professor at Hampden-Sydney College in Virginia." />
      </div>

      <div className="montures__presentationText7">
        <MonturesDetails2 text="Contrary to popular belief, Lorem Ipsum is not  simply random text. It has roots in a piece of  classical Latin literature from 45 BC, making it over  2000 years old. Richard McClintock, a Latin  professor at Hampden-Sydney College in Virginia." />
      </div>

      <div className="montures__lunettesBottom1">
        <img src={MonturesDetailBleu} alt="Monture bas 1" />
      </div>

      <div className="montures__lunettesBottom2">
        <img src={MonturesDetailGris} alt="Monture bas 2" />
      </div>

      <div className="montures__lunettesBottom3">
        <img src={MonturesDetailRouge} alt="Monture bas 3" />
      </div>
    </div>
  );
};

export default Montures;
