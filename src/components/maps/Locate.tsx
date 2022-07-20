import React from 'react';
import { toast } from 'react-toastify';

type Props = { panTo: Function };

const Locate: React.FC<Props> = ({ panTo }) => {
  const GeoLoc = () => {
    const customId = 'custom-id-yes';

    toast.info('Géolocalisation en cours', {
      autoClose: 2000,
      toastId: customId,
      pauseOnHover: false,
    });
    navigator.geolocation.getCurrentPosition(
      (position) => {
        return panTo(position.coords.latitude, position.coords.longitude);
      },
      () => null,
    );
  };

  return (
    <>
      <button
        className="locate"
        onClick={() => {
          GeoLoc();
        }}>
        <i className="far fa-compass fa-3x" />
      </button>
    </>
  );
};

export default Locate;
