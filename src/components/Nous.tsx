import React from 'react';

import collaborateurs from '../assets/collaborateurs.png';
import ellipse from '../assets/ellipse.png';
import picto_goutte from '../assets/goutte-trait.png';
import logo from '../assets/LUNETIC.png';
import picto_lunettes from '../assets/LUNETIC_Lunette_v2.png';
import rectangle1 from '../assets/Rectangle-gris-1.png';
import rectangle2 from '../assets/Rectangle-gris-2.png';
import ligneOblique from '../assets/ligne-oblique-grise.png';

const Nous = () => {
  return (
    <div className="nous">
      <img className="nous__picto_goutte" src={picto_goutte} alt="picto-goutte-lunetic" />
      <h2 className="nous__h2">Nous</h2>

      <img className="nous__rectangle1" src={rectangle1} alt="" />
      <img className="nous__rectangle2" src={rectangle2} alt="" />

      <div className="nous__subtitles">
        <h3 className="nous__h3">Hey! We host all events near you!</h3>
        <p className="nous__p">
          enjoy <br />
          <br />
          your life
        </p>
      </div>

      <img
        className="nous__collaborateurs"
        src={collaborateurs}
        alt="collaborateurs-lunetic"
      />
      <div className="nous__miniBioContainer">
        <p className="nous__bio1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugit illo
          ipsam alias dolor cum eaque exercitationem, odio sint commodi quisquam tempore
          deserunt iure ex eligendi amet illum, natus deleniti.
        </p>
        <p className="nous__bio2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, exercitationem
          fuga hic nulla quam quo vel officia eius, excepturi illo delectus. Sed suscipit
          vel ipsam illum voluptate voluptatibus voluptatum quia.
        </p>
        <p className="nous__bio3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti
          labore enim doloribus obcaecati! Repellendus, cumque reiciendis fuga inventore
          cum officia porro, pariatur quo ea deleniti ex ad, et obcaecati.
        </p>
        <p className="nous__bio4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum explicabo
          enim beatae ad cum natus laudantium delectus, molestias officiis aliquid sequi
          architecto eum doloribus modi! Repudiandae nostrum maiores pariatur.
        </p>
        <p className="nous__bio5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam necessitatibus
          saepe a asperiores dolorem. Facilis iusto excepturi accusamus optio sit pariatur
          odio quibusdam numquam aut? Aliquam blanditiis cupiditate aperiam suscipit!
        </p>
      </div>
      <img className="nous__ligne_oblique_1" src={ligneOblique} alt="" />
      <img className="nous__picto_lunettes" src={picto_lunettes} alt="lunetic-lunettes" />

      <h3 className="nous__h3">Partenaires</h3>

      <img src={ellipse} alt="" className="nous__ellipse" />

      <div className="nous__partenaires">
        <img src={logo} alt="" className="nous__logo" />
        <img src={logo} alt="" className="nous__logo" />
        <img src={logo} alt="" className="nous__logo" />
        <img src={logo} alt="" className="nous__logo" />
        <img src={logo} alt="" className="nous__logo" />
        <img src={logo} alt="" className="nous__logo" />
        <img src={logo} alt="" className="nous__logo" />
        <img src={logo} alt="" className="nous__logo" />
        <img src={logo} alt="" className="nous__logo" />
        <img src={logo} alt="" className="nous__logo" />
        <img src={logo} alt="" className="nous__logo" />
        <img src={logo} alt="" className="nous__logo" />
      </div>
      <img className="nous__ligne_oblique_2" src={ligneOblique} alt="" />
    </div>
  );
};

export default Nous;
