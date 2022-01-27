import React from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';

type Props = { panTo: Function };

const Locate: React.FC<Props> = ({ panTo }) => {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            return panTo(position.coords.latitude, position.coords.longitude);
          },
          () => null,
        );
      }}>
      <i className="far fa-compass fa-3x" />
    </button>
  );
};

export default Locate;
