import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import mapsStyles from '../mapsStyle';

const containerStyle = {
  width: '100vw',
  height: '500px',
};

const center = {
  lat: 43.46352270882575,
  lng: -1.511119064793627,
};

const options = {
  styles: mapsStyles,
};

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'lunetic',
    googleMapsApiKey: 'AIzaSyAj7bIhidKqNcgh0IT_q0ORqcHH3S7wA6U',
  });

  return isLoaded ? (
    <div className="maps">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={options}>
        {/* Child components, such as markers, info windows, etc. */}
        <div>
          {
            <Marker
              position={{
                lat: 43.46352270882575,
                lng: -1.511119064793627,
              }}
            />
          }
          {
            <Marker
              position={{
                lat: 43.488885840253936,
                lng: -1.4927173468971295,
              }}
            />
          }
        </div>
      </GoogleMap>
      <div className="maps__child1"></div>
    </div>
  ) : (
    <></>
  );
};

export default Maps;
