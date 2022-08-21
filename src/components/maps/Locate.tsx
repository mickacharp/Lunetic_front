import React from 'react';
import { toast } from 'react-toastify';

type Props = { panTo: Function };

const Locate: React.FC<Props> = ({ panTo }) => {
  const GeoLoc = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        toast.success('Géolocalisation réussie', {
          autoClose: 3000,
          pauseOnHover: true,
        });
        return panTo(position.coords.latitude, position.coords.longitude);
      },
      () =>
        toast.error('Géolocalisation impossible', {
          autoClose: 3000,
          pauseOnHover: true,
        }),
    );
  };

  return (
    <>
      <button
        className="locate"
        onClick={() => {
          GeoLoc();
        }}>
        <i className="fa fa-compass fa-3x" />
      </button>
    </>
  );
};

export default Locate;
