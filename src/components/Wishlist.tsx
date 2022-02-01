import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CurrentOpticianContext from '../contexts/CurrentOptician';
import IWishlist from '../interfaces/IWishlist';
import gout from '../assets/gout-little.png';

const Wishlist = () => {
  const [listWishlists, setListWishlists] = useState<IWishlist[]>([]);
  const { idOptician } = useContext(CurrentOpticianContext);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/wishlists')
      .then((res) => res.data)
      .then((data) => setListWishlists(data));
  }, []);

  return (
    <div className="wishlist">
      <div className="wishlist__container">
        <Link to="/optician-home">
          <div className="modal-info__close">
            <p>Fermer</p>
          </div>
        </Link>
        <div className="wishlist__left">
          <img src={gout} alt="gout-lunetic" />
        </div>
        <div className="wishlist__right">
          <h1>Mes listes de souhaits</h1>
          {listWishlists &&
            listWishlists.map((wishlist) => (
              <Link to={`/opticians/${idOptician}/wishlists/${wishlist.id_wishlist}`}>
                <div className="wishlist__list" key={wishlist.id_wishlist}>
                  {wishlist.name}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
