import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import CurrentOpticianContext from '../../contexts/CurrentOptician';
import IWishlist from '../../interfaces/IWishlist';

type Props = {
  setShowModal: Function;
  addModelInWishlist: Function;
};

const AddToWishlist: React.FC<Props> = ({ setShowModal, addModelInWishlist }) => {
  const [listWishlists, setListWishlists] = useState<IWishlist[]>();
  const [nameWishlist, setNameWishlist] = useState<string>('');
  const { idOptician } = useContext(CurrentOpticianContext);
  const [validateNewWishlist, setValidateNewWishlist] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/opticians/${idOptician}/wishlists`)
      .then((res) => res.data)
      .then((data) => setListWishlists(data));
  }, [validateNewWishlist]);

  // Create a wishlist and add the model directly to this wishlist
  const createWishlist = () => {
    axios
      .post(
        'http://localhost:4000/api/wishlists',
        {
          id_optician: idOptician,
          name: nameWishlist,
        },
        {
          method: 'POST',
          withCredentials: true,
        },
      )
      .then((res) => res.data)
      .then((data) => addModelInWishlist(data.id_wishlist));
  };

  return (
    <>
      <div className="modalWishlists">
        <div className="modalWishlists__container">
          {/* Closing text button */}
          <div
            className="modal-info__close"
            onClick={() => setShowModal(false)}
            onKeyPress={() => setShowModal(false)}
            tabIndex={0}
            role="button"
            aria-pressed="false">
            <p>Fermer</p>
          </div>

          {/* Add model to a new wishlist */}
          <h2>Ajouter la monture à une nouvelle liste de souhait ?</h2>
          <div className="modalWishlists__input">
            <input
              type="text"
              name="name-wishlist"
              placeholder="Nom de ma liste de souhait"
              value={nameWishlist}
              onChange={(e) => setNameWishlist(e.target.value)}
            />
            <button
              onClick={() => {
                createWishlist();
                setNameWishlist('');
                setTimeout(() => setValidateNewWishlist(!validateNewWishlist), 200);
              }}>
              Valider
            </button>
          </div>

          {/* Add model to an existing wishlist */}
          <h2>Ajouter la monture à une liste de souhait déjà existante</h2>
          {listWishlists && listWishlists.length === 0 ? (
            <div className="modalWishlists__list">
              <p>Vous n&apos;avez pas encore créé de liste de souhait</p>
            </div>
          ) : (
            <div className="modalWishlists__list">
              {listWishlists &&
                listWishlists.map((wishlist) => (
                  <p
                    key={wishlist.id_wishlist}
                    className="modalWishlists__name-wishlist"
                    onClick={() => {
                      addModelInWishlist(wishlist.id_wishlist);
                    }}
                    onKeyPress={() => {
                      addModelInWishlist(wishlist.id_wishlist);
                    }}
                    tabIndex={0}
                    role="button"
                    aria-pressed="false">
                    {wishlist.name}
                  </p>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddToWishlist;
