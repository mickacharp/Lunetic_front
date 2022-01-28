import React from 'react';
import Maps from './Maps';

const FindUs = () => {
  return (
    <div>
      <Maps
        defaultZoom={6}
        defaultCenter={{ lat: 46.67690240034894, lng: 2.3777189382170634 }}
        mapClassName={'maps'}
      />
    </div>
  );
};

export default FindUs;
