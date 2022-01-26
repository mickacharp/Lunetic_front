import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import IModels from '../interfaces/IModels';

const ModalInfo = () => {
  const { id_model } = useParams();
  const [infoGlass, setInfoGlass] = useState<Object<IModels>>();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/models/${id_model}`)
      .then((res) => res.data)
      .then((data) => setInfoGlass(data));
  }, []);

  return (
    <div className="modal-info">
      {infoGlass && (
        <div className="modal-info__content">
          <Link to="/catalogue">
            <div className="modal-info__close">
              <p>Fermer</p>
            </div>
          </Link>
          <div className="modal-info__img">
            <div className="modal-info__img--main">
              <img src={infoGlass.main_img} alt={infoGlass.name} />
            </div>
            <div className="modal-info__img--2">
              <img src={infoGlass.img_2} alt={infoGlass.name} />
            </div>
            <div className="modal-info__img--3">
              <img src={infoGlass.img_3} alt={infoGlass.name} />
            </div>
            <div className="modal-info__img--4">
              <img src={infoGlass.img_4} alt={infoGlass.name} />
            </div>
            <div className="modal-info__img--5">
              <img src={infoGlass.img_4} alt={infoGlass.name} />
            </div>
          </div>
          <div className="modal-info__text">
            <p className="title">{infoGlass.name}</p>
            <p className="greyC4 uppercase">Specifics</p>
            <p className="uppercase">Adjustable cuffs, back vent, two side pockets</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalInfo;
