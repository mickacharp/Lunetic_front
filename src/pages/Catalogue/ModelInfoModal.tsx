import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import heart from '../../assets/heart.png';
import Sidebar from '../../components/ui/Sidebar';
import CurrentOpticianContext from '../../contexts/CurrentOptician';
import IColor from '../../interfaces/IColor';
import IModels from '../../interfaces/IModels';
import AddToWishlist from './AddToWishlist';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ModelInfoModal = () => {
  const { id_model } = useParams();
  const [infoGlasses, setInfoGlasses] = useState<IModels>();
  const [colorsList, setColorsList] = useState<IColor[]>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [idColorModel, setIdColorModel] = useState<number>(0);
  const { idOptician } = useContext(CurrentOpticianContext);

  useEffect(() => {
    axios
      .get(`${BASE_URL}models/${id_model}`)
      .then((res) => res.data)
      .then((data) => setInfoGlasses(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}colors`)
      .then((res) => res.data)
      .then((data) => setColorsList(data));
  }, []);

  // Add a model in the wishlist
  const addModelInWishlist = (idWishlist: number) => {
    axios
      .post(
        `${BASE_URL}glasses`,
        {
          id_model: id_model,
          id_color_model: idColorModel,
          id_wishlist: idWishlist,
        },
        {
          method: 'POST',
          withCredentials: true,
        },
      )
      .then(() => showToastModelSuccessfullyAddedInWishlist());
  };

  const showToastModelSuccessfullyAddedInWishlist = () => {
    toast.success('Modèle ajouté à la liste de souhait', {
      autoClose: 3000,
      pauseOnHover: true,
    });
  };

  const showWarningToastIfNoSelectedColor = () => {
    idColorModel === 0 &&
      toast.warning('Sélectionnez une couleur pour pouvoir poursuivre', {
        autoClose: 3000,
        pauseOnHover: true,
      });
  };

  return (
    <>
      <Sidebar anchor={0} />
      <div className="modal-info">
        {infoGlasses && (
          <div className="modal-info__content">
            {/* Closing text button */}
            <Link to="/catalogue">
              <div className="modal-info__close">
                <p>Fermer</p>
              </div>
            </Link>

            {/* Images */}
            <div
              className={
                infoGlasses.main_img == null ? 'modal-info__img-flex' : 'modal-info__img'
              }>
              <div className="modal-info__img--main">
                <img src={infoGlasses.main_img} alt={infoGlasses.name} />
              </div>
              {infoGlasses.img_2 && (
                <div className="modal-info__img--2">
                  <img src={infoGlasses.img_2} alt={infoGlasses.name} />
                </div>
              )}
              {infoGlasses.img_3 && (
                <div className="modal-info__img--3">
                  <img src={infoGlasses.img_3} alt={infoGlasses.name} />
                </div>
              )}
              {infoGlasses.img_4 && (
                <div className="modal-info__img--4">
                  <img src={infoGlasses.img_4} alt={infoGlasses.name} />
                </div>
              )}
              {infoGlasses.img_5 && (
                <div className="modal-info__img--5">
                  <img src={infoGlasses.img_5} alt={infoGlasses.name} />
                </div>
              )}
            </div>

            {/* Informations of the model */}
            <div className="modal-info__text">
              <p className="title">{infoGlasses.name}</p>
              <p className="greyC4 uppercase">Spécificités</p>
              <p className="uppercase">{infoGlasses.description}</p>
              <div className="modal-info__container-btn">
                <div className="dropdown-list">
                  <select
                    name="colors"
                    id="colors-glasses"
                    onChange={(e) => setIdColorModel(Number(e.target.value))}>
                    <option value="">Choisissez une couleur...</option>
                    {colorsList &&
                      colorsList.map((color) => (
                        <option key={color.id_color} value={color.id_color}>
                          {color.name.charAt(0).toUpperCase() +
                            color.name.slice(1).toLowerCase()}
                          {/* Put the first letter in uppercase */}
                        </option>
                      ))}
                  </select>
                </div>

                {/* Condition to display the button only when optician is connected */}
                {idOptician !== 0 && (
                  <div
                    className="modal-info__btn"
                    onClick={() => {
                      showWarningToastIfNoSelectedColor();
                      idColorModel !== 0 && setShowModal(true);
                    }}
                    role="button">
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
        <AddToWishlist
          setShowModal={setShowModal}
          addModelInWishlist={addModelInWishlist}
        />
      )}
    </>
  );
};

export default ModelInfoModal;
