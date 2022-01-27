import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = { panTo: Function };

const Locate: React.FC<Props> = ({ panTo }) => {
  const GeoLoc = () => {
    const customId = 'custom-id-yes';

    toast.info('Géolocalisation en cours', {
      autoClose: 3000,
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
      <ToastContainer />
    </>
  );
};

export default Locate;
