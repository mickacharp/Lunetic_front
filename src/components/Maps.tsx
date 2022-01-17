import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import carteDepliante from '../assets/carte-depliante.png';
import points from '../assets/cube-points-gris.png';
import traitVertical from '../assets/trait.png';
import cercleGris from '../assets/moyen-cercle-gris.png';
import traitOblique from '../assets/trait-oblique-gris.png';
import petitCercle from '../assets/petit-cercle-rouge.png';

import apiKey from '../../api.js';
import mapsStyles from '../mapsStyle';
import SearchBarMaps from './SearchBarMaps';
import IOptician from '../interfaces/IOptician';
import Geocode from 'react-geocode';
import { getGeocode } from 'use-places-autocomplete';

Geocode.setApiKey(apiKey);
Geocode.setLanguage('fr');
Geocode.setRegion('fr');

const containerStyle = {
  width: '100vw',
  height: '100%',
};

interface ICenter {
  lat: number;
  lng: number;
}

const options = {
  styles: mapsStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const Maps = () => {
  const [zoom, setZoom] = useState(10);
  const [center, setCenter] = useState<ICenter>({
    lat: 43.46352270882575,
    lng: -1.511119064793627,
  });

  const panTo: Function = (lat: number, lng: number) => {
    setCenter({ lat, lng });
    setZoom(13);
  };

  const { isLoaded } = useJsApiLoader({
    id: 'lunetic',
    googleMapsApiKey: apiKey,
    libraries: ['places'],
  });

  const [opticiansInfos, setOpticiansInfos] = useState<IOptician>();

  const [geoCodeArray, setGeoCodeArray] = useState<Array<ICenter>>([]);
  const [itsOk, setItsOk] = useState<Boolean>(false);

  useEffect(() => {
    const geoCodeArrayTemp: Array<ICenter> = [];
    axios
      .get<IOptician[]>(`http://localhost:4000/api/opticians/`)
      .then((results) => results.data)
      .then((data) => {
        data.map((optician) => {
          Geocode.fromAddress(optician.city)
            .then((response) =>
              geoCodeArrayTemp.push(response.results[0].geometry.location),
            )
            .then(() => {
              setGeoCodeArray(geoCodeArrayTemp);
              setItsOk(true);
            });
        });
      });
  }, []);

  // Enable or disable logs. Its optional.
  //Geocode.enableDebug();

  //geoCodeArray.length && console.log(geoCodeArray.length);

  //geoCodeArray.length && console.log(geoCodeArray);

  //setTimeout(() => console.log(geoCodeArray[0]), 1000);

  return isLoaded ? (
    <div className="section_ou_nous_trouver">
      <h2 className="section_ou_nous_trouver__h2"> Où nous trouver</h2>
      <img
        className="section_ou_nous_trouver__carte_depliante"
        src={carteDepliante}
        alt="carte"
      />
      <img className="section_ou_nous_trouver__points" src={points} alt="points" />
      <img
        className="section_ou_nous_trouver__trait_vertical"
        src={traitVertical}
        alt="trait"
      />
      <img
        className="section_ou_nous_trouver__moyen_cercle_gris"
        src={cercleGris}
        alt="cercle-gris"
      />
      <img
        className="section_ou_nous_trouver__trait_oblique"
        src={traitOblique}
        alt="trait-oblique"
      />
      <img
        className="section_ou_nous_trouver__moyen_cercle_gris2"
        src={cercleGris}
        alt="cercle-gris"
      />
      <img
        className="section_ou_nous_trouver__grand_trait_oblique"
        src={traitOblique}
        alt="trait-oblique"
      />
      <img
        className="section_ou_nous_trouver__petit_cercle_rouge"
        src={petitCercle}
        alt="cercle-rouge"
      />

      <SearchBarMaps panTo={panTo} />
      <div className="section_ou_nous_trouver__maps">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={options}>
          {/* Child components, such as markers, info windows, etc. */}
          <div>
            {geoCodeArray.length &&
              geoCodeArray.map((geocode) => {
                console.log(geocode);
                return (
                  <Marker
                    position={{
                      lat: geocode.lat,
                      lng: geocode.lng,
                    }}
                  />
                );
              })}
            {/* {
              <Marker
                position={{
                  lat: 43.411215,
                  lng: -1.623063,
                }}
              />
            }
            {
              <Marker
                position={{
                  lat: 43.4633301,
                  lng: -1.510909,
                }}
              />
            } */}
            {/* {
              <Marker
                position={{
                  lat: 43.610771,
                  lng: -1.314267,
                }}
              />
            } */}
          </div>
        </GoogleMap>
        <div className="section_ou_nous_trouver__child1"></div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Maps;
