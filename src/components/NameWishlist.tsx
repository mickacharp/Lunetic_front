import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import CurrentOpticianContext from '../contexts/CurrentOptician';
import IInfoWishlist from '../interfaces/IInfoWishlist';

type Props = {
  name: string;
  idWishlist: number;
  edit: boolean;
  editFinished: boolean;
  setEditFinished: Function;
  wishlistDeleted: boolean;
  setWishlistDeleted: Function;
  deleteWishlistTest: Function;
};

const NameWishlist: React.FC<Props> = ({
  name,
  idWishlist,
  edit,
  editFinished,
  setEditFinished,
  wishlistDeleted,
  setWishlistDeleted,
  deleteWishlistTest,
}) => {
  const { idOptician } = useContext(CurrentOpticianContext);
  const [newNameWishlist, setNewNameWishlist] = useState<string>(name);
  const [editName, setEditName] = useState<boolean>(false);
  const [listGlasses, setListGlasses] = useState<IInfoWishlist[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/wishlists/${idWishlist}/glasses`)
      .then((res) => res.data)
      .then((data) => setListGlasses(data));
  }, []);

  const updateNameWishlist = () => {
    axios.put(
      `http://localhost:4000/api/wishlists/${idWishlist}`,
      {
        name: newNameWishlist,
      },
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );
  };

  const deleteWishlist = () => {
    const deleteGlasses = new Promise((resolve, reject) => {
      resolve(
        listGlasses.map((glasses) =>
          axios.delete(
            `http://localhost:4000/api/glasses/${glasses.id_model_temple_color}`,
            {
              method: 'DELETE',
              withCredentials: true,
            },
          ),
        ),
      );
    });
    deleteGlasses.then(() =>
      axios.delete(`http://localhost:4000/api/wishlists/${idWishlist}`, {
        method: 'DELETE',
        withCredentials: true,
      }),
    );
  };

  const customId = 'custom-id-yes';
  const toastWishlistDeleted = () => {
    toast.success('Votre liste de souhaits a bien été supprimée', {
      autoClose: 2000,
      toastId: customId,
      pauseOnHover: false,
    });
  };

  const toastNameWishlistModified = () => {
    toast.success('Liste de souhaits renommée avec succès', {
      autoClose: 2000,
      toastId: customId,
      pauseOnHover: false,
    });
  };

  return (
    <div className="name-wishlist">
      <div className="name-wishlist__container">
        {editName ? (
          <div className="name-wishlist__list name-wishlist__edit">
            <input
              type="text"
              value={newNameWishlist}
              onChange={(e) => setNewNameWishlist(e.target.value)}
            />
          </div>
        ) : (
          <Link to={`/opticians/${idOptician}/wishlists/${idWishlist}`} key={idWishlist}>
            <div className="name-wishlist__list">{name}</div>
          </Link>
        )}
        {edit && (
          <input
            className="name-wishlist__btn-edit"
            type="button"
            value={editName ? 'Valider' : 'Modifier'}
            onClick={() => {
              setEditName(!editName);
              if (editName) {
                updateNameWishlist();
                setEditFinished(!editFinished);
                toastNameWishlistModified();
              }
            }}
          />
        )}
        {edit && (
          <input
            className="name-wishlist__btn-remove"
            type="button"
            value="Supprimer"
            onClick={() => {
              deleteWishlist();
              setWishlistDeleted(!wishlistDeleted);
              toastWishlistDeleted();
              deleteWishlistTest(idWishlist);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default NameWishlist;
