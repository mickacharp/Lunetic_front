import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CurrentOpticianContext from '../contexts/CurrentOptician';
import IWishlist from '../interfaces/IWishlist';
import gout from '../assets/gout-little.png';
import Sidebar from './Sidebar';
import NameWishlist from './NameWishlist';

const Wishlist = () => {
  const [listWishlists, setListWishlists] = useState<IWishlist[]>([]);
  const [edit, setEdit] = useState<boolean>(false);
  const [editFinished, setEditFinished] = useState<boolean>(false);
  const [wishlistDeleted, setWishlistDeleted] = useState<boolean>(false);
  const { idOptician } = useContext(CurrentOpticianContext);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/opticians/${idOptician}/wishlists`)
      .then((res) => res.data)
      .then((data) => setListWishlists(data));
  }, [editFinished, wishlistDeleted]);

  return (
    <>
      <Sidebar anchor={0} />
      <div className="wishlist">
        {idOptician == 0 ? (
          <p className="details-wishlist__please-connect">
            <Link to="/login">
              <strong>Connectez-vous</strong>
            </Link>{' '}
            pour accéder à votre profil
          </p>
        ) : (
          <div className="wishlist__container">
            <Link to="/optician-home">
              <div className="modal-info__close">
                <p>Fermer</p>
              </div>
            </Link>
            <div className="wishlist__left">
              <div className="wishlist__img">
                <img src={gout} alt="gout-lunetic" />
              </div>
            </div>
            <div className="wishlist__right">
              <h1>Mes listes de souhaits</h1>
              <div className="wishlist__name-wishlist">
                {listWishlists &&
                  listWishlists.map((wishlist) => (
                    <NameWishlist
                      key={wishlist.id_wishlist}
                      name={wishlist.name}
                      idWishlist={wishlist.id_wishlist}
                      edit={edit}
                      editFinished={editFinished}
                      setEditFinished={setEditFinished}
                      wishlistDeleted={wishlistDeleted}
                      setWishlistDeleted={setWishlistDeleted}
                    />
                  ))}
              </div>
              <input
                className="wishlist__btn-modify"
                type="button"
                value={edit ? 'Fermer' : 'Modifier'}
                onClick={() => setEdit(!edit)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
