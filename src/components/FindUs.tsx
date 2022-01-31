import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Maps from './Maps';

const FindUs = () => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
