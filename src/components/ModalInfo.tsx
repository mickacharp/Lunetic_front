import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import IModels from '../interfaces/IModels';
import heart from '../assets/heart.png';
import IColor from '../interfaces/IColor';
import ModalWishlists from './ModalWishlists';
import Sidebar from './Sidebar';
import CurrentOpticianContext from '../contexts/CurrentOptician';

const ModalInfo = () => {
  const { id_model } = useParams();
  const [infoGlass, setInfoGlass] = useState<IModels>();
  const [colorsList, setColorsList] = useState<IColor[]>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [idColorModel, setIdColorModel] = useState<number>(0);
  const { idOptician } = useContext(CurrentOpticianContext);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/models/${id_model}`)
      .then((res) => res.data)
      .then((data) => setInfoGlass(data));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/colors')
      .then((res) => res.data)
      .then((data) => setColorsList(data));
  }, []);

  const addModelInWishlist = (idWishlist: number) => {
    axios.post('http://localhost:4000/api/models-wishlist', {
      id_model: id_model,
      id_color_model: idColorModel,
      id_wishlist: idWishlist,
    });
  };

  return (
    <>
      <Sidebar />
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
              <div className="modal-info__container-btn">
                <div className="dropdown-list">
                  <select
                    name="colors"
                    id="colors-glasses"
                    onChange={(e) => setIdColorModel(Number(e.target.value))}>
                    <option value="">Couleurs</option>
                    {colorsList &&
                      colorsList.map((color) => (
                        <option key={color.id_color} value={color.id_color}>
                          {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
                          {/* Fonction qui permet de mettre la première lettre des couleurs en majuscule */}
                        </option>
                      ))}
                  </select>
                </div>
                {idOptician !== 0 && (
                  <div className="modal-info__btn" onClick={() => setShowModal(true)}>
                    <p>Ajouter à ma liste de souhait</p>
                    <div className="modal-info__btn--heart">
                      <img src={heart} alt="heart" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {showModal && (
        <ModalWishlists
          setShowModal={setShowModal}
          addModelInWishlist={addModelInWishlist}
          idColorModel={idColorModel}
        />
      )}
    </>
  );
};

export default ModalInfo;
