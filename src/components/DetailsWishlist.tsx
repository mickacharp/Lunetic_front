import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import CurrentOpticianContext from '../contexts/CurrentOptician';
import IInfoWishlist from '../interfaces/IInfoWishlist';
import IWishlist from '../interfaces/IWishlist';
import Sidebar from './Sidebar';

const DetailsWishlist = () => {
  const { id_wishlist } = useParams();
  const { idOptician } = useContext(CurrentOpticianContext);

  const [infoWishlist, setInfoWishlist] = useState<IInfoWishlist[]>([]);
  const [nameWishlist, setNameWishlist] = useState<IWishlist>();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/wishlists/${id_wishlist}/glasses`)
      .then((res) => res.data)
      .then((data) => setInfoWishlist(data));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/wishlists/${id_wishlist}`)
      .then((res) => res.data)
      .then((data) => setNameWishlist(data));
  }, []);

  const removeFromWishlist = (id: number) => {
    axios.delete(`http://localhost:4000/api/glasses/${id}`, {
      method: 'DELETE',
      withCredentials: true,
    });
  };

  const deleteGlass = (idGlass: number) => {
    setInfoWishlist(
      infoWishlist.filter((glass) => glass.id_model_temple_color !== idGlass),
    );
  };

  const customId = 'custom-id-yes';
  const toastGlassDeleted = () => {
    toast.success('Les lunettes ont bien été supprimées de votre liste de souhaits', {
      autoClose: 2000,
      toastId: customId,
      pauseOnHover: false,
    });
  };

  return (
    <>
      <Sidebar anchor={0} />
      <div className="details-wishlist">
        {idOptician == 0 ? (
          <p className="details-wishlist__please-connect">
            <Link to="/login">
              <strong>Connectez-vous</strong>
            </Link>{' '}
            pour accéder à votre profil
          </p>
        ) : (
          <div className="details-wishlist__container">
            <Link to={`/opticians/${idOptician}/wishlists`}>
              <div className="modal-info__close">
                <p>Fermer</p>
              </div>
            </Link>
            <div className="details-wishlist__title">
              <h1>{nameWishlist && nameWishlist.name}</h1>
            </div>
            <div className="details-wishlist__list-favorites">
              {infoWishlist &&
                infoWishlist.map((wishlist) => (
                  <div
                    className="details-wishlist__card"
                    key={wishlist.id_model_temple_color}>
                    <div className="details-wishlist__img">
                      <img src={wishlist.main_img} alt="glass-picture" />
                    </div>
                    <div className="details-wishlist__description">
                      <h2>{wishlist.name_model}</h2>
                      <p>Couleur : {wishlist.name_color}</p>
                      <div className="details-wishlist__btn-remove">
                        <button
                          onClick={() => {
                            removeFromWishlist(wishlist.id_model_temple_color);
                            toastGlassDeleted();
                            deleteGlass(wishlist.id_model_temple_color);
                          }}>
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailsWishlist;
