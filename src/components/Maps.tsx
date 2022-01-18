import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';
import React, { ReactElement, useEffect, useState, useContext } from 'react';
import apiKey from '../../api.js';
import carteDepliante from '../assets/carte-depliante.png';
import points from '../assets/cube-points-gris.png';
import cercleGris from '../assets/moyen-cercle-gris.png';
import petitCercle from '../assets/petit-cercle-rouge.png';
import traitVertical from '../assets/trait.png';
import traitOblique from '../assets/trait-oblique-gris.png';
import mapsStyles from '../mapsStyle';
import SearchBarMaps from './SearchBarMaps';
import IOptician from '../interfaces/IOptician';
import PositionYContext from '../contexts/PositionY';

const containerStyle = {
  width: '100vw',
  height: '100%',
};

type Libraries = ('drawing' | 'geometry' | 'localContext' | 'places' | 'visualization')[];

const options = {
  styles: mapsStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const libraries: Libraries = ['places'];

const Maps = () => {
  const { setNumberDiv4 } = useContext(PositionYContext);
  const [zoom, setZoom] = useState(10);
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 43.46352270882575,
    lng: -1.511119064793627,
  });

  const panTo: Function = (latLng: google.maps.LatLngLiteral) => {
    setCenter(latLng);
    setZoom(13);
  };

  const { isLoaded } = useJsApiLoader({
    id: 'lunetic',
    googleMapsApiKey: apiKey,
    libraries: libraries,
  });

  const [opticiansInfos, setOpticiansInfos] = useState<Array<IOptician>>();

  useEffect(() => {
    axios
      .get<IOptician[]>(`http://localhost:4000/api/opticians/`)
      .then((results) => results.data)
      .then((data) => {
        console.log(data);
        setOpticiansInfos(data);
      });
  }, []);

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
        ref={(el) => {
          if (!el) return;
          setNumberDiv4(el.getBoundingClientRect().top + 300);
        }}
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
            {opticiansInfos &&
              opticiansInfos.map((geocode, index: number) => {
                //console.log(geocode.lat, ',', geocode.lng);
                return (
                  <Marker
                    key={index}
                    position={{
                      lat: Number(geocode.lat),
                      lng: Number(geocode.lng),
                    }}
                  />
                );
              })}
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
