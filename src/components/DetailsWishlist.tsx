import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CurrentOpticianContext from '../contexts/CurrentOptician';
import IInfoWishlist from '../interfaces/IInfoWishlist';
import IWishlist from '../interfaces/IWishlist';
import Sidebar from './Sidebar';

const DetailsWishlist = () => {
  const { id_wishlist } = useParams();
  const { idOptician } = useContext(CurrentOpticianContext);

  const [infoWishlist, setInfoWishlist] = useState<IInfoWishlist[]>([]);
  const [nameWishlist, setNameWishlist] = useState<IWishlist>();
  const [deleted, setDeleted] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/models-wishlist/wishlists/${id_wishlist}`)
      .then((res) => res.data)
      .then((data) => setInfoWishlist(data));
  }, [deleted]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/wishlists/${id_wishlist}`)
      .then((res) => res.data)
      .then((data) => setNameWishlist(data));
  }, []);

  const removeFromWishlist = (id: number) => {
    axios.delete(`http://localhost:4000/api/models-wishlist/${id}`);
  };

  return (
    <>
      <Sidebar anchor={0} />
      <div className="details-wishlist">
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
                          setDeleted(!deleted);
                        }}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsWishlist;
