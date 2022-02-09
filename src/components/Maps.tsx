import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import apiKey from '../../api.js';
import carteDepliante from '../assets/carte-depliante.png';
import points from '../assets/cube-points-gris.png';
import cercleGris from '../assets/moyen-cercle-gris.png';
import petitCercle from '../assets/petit-cercle-rouge.png';
import traitVertical from '../assets/trait.png';
import traitOblique from '../assets/trait-oblique-gris.png';
import PositionYContext from '../contexts/PositionY';
import IOpeningHour from '../interfaces/IOpeningHour';
import IOptician from '../interfaces/IOptician';
import mapsStyles from '../mapsStyle';
import Locate from './Locate';
import SearchBarMaps from './SearchBarMaps';
import Sidebar from './Sidebar';

type Libraries = ('drawing' | 'geometry' | 'localContext' | 'places' | 'visualization')[];

const libraries: Libraries = ['places'];

type Props = {
  defaultZoom: number;
  defaultCenter: { lat: number; lng: number };
  mapClassName: string;
};

const Maps: React.FC<Props> = (props) => {
  const { defaultZoom, defaultCenter, mapClassName }: any = props;
  const { setNumberDiv4 } = useContext(PositionYContext);
  const [zoom, setZoom] = useState(defaultZoom);
  const [center, setCenter] = useState<google.maps.LatLngLiteral>(defaultCenter);
  const [opticiansInfos, setOpticiansInfos] = useState<Array<IOptician>>();
  const [selected, setSelected] = useState<IOptician>();
  const [opticianHours, setOpticianHours] = useState<Array<IOpeningHour>>();

  /* Define react-google-maps package options */
  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const options = {
    styles: mapsStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  /* function used to refocus the map on the desired city and define a closer zoom  */
  const panTo: Function = (lat: number, lng: number) => {
    setCenter({ lat, lng });
    setZoom(13);
  };

  /* function used to initialise the map */
  const { isLoaded } = useJsApiLoader({
    id: 'lunetic',
    googleMapsApiKey: apiKey,
    libraries: libraries,
  });

  /* get opticians infos from database */
  useEffect(() => {
    axios
      .get<IOptician[]>(`http://localhost:4000/api/opticians/`)
      .then((results) => results.data)
      .then((data) => {
        setOpticiansInfos(data);
      });
  }, []);

  /* get opticians opening hours from database */
  useEffect(() => {
    selected &&
      axios
        .get<IOpeningHour[]>(
          `http://localhost:4000/api/opticians/${selected?.id_optician}/openingHours`,
        )
        .then((results) => results.data)
        .then((data) => {
          setOpticianHours(data);
        });
  }, [selected]);

  let location = useLocation();

  return isLoaded ? (
    <>
      <Sidebar anchor={0} />
      <div className="section_ou_nous_trouver">
        <h2 className="section_ou_nous_trouver__h2"> Où nous trouver</h2>
        {location.pathname === '/' ? (
          <>
            <img
              className="section_ou_nous_trouver__carte_depliante"
              src={carteDepliante}
              alt="carte"
            />
            <img
              className="section_ou_nous_trouver__trait_oblique"
              src={traitOblique}
              alt="trait-oblique"
            />
          </>
        ) : (
          <></>
        )}
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
            setNumberDiv4(el.getBoundingClientRect().top + 1500);
          }}
        />

        <SearchBarMaps panTo={panTo} />
        <div className="section_ou_nous_trouver__locate">
          <Locate panTo={panTo} />
        </div>

        <div className={'section_ou_nous_trouver__' + mapClassName}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
            options={options}>
            <div>
              {opticiansInfos &&
                opticiansInfos.map((optician, index: number) => {
                  return (
                    <Marker
                      key={index}
                      position={{
                        lat: Number(optician.lat),
                        lng: Number(optician.lng),
                      }}
                      onClick={() => {
                        setSelected(optician);
                      }}
                    />
                  );
                })}
            </div>
            {selected ? (
              <InfoWindow
                position={{ lat: Number(selected.lat), lng: Number(selected.lng) }}
                onCloseClick={() => {
                  setSelected(undefined);
                }}>
                <div className="section_ou_nous_trouver__info_window">
                  <img src={selected.link_picture} width="100px" alt="" />
                  <h2>{selected.company}</h2>
                  <p className="section_ou_nous_trouver__address">{selected.address}</p>
                  <p className="section_ou_nous_trouver__city">
                    {selected.postal_code}, {selected.city}
                  </p>
                  <div className="section_ou_nous_trouver__contact">
                    <h4>Contactez-nous :</h4>

                    <a href={'mailto:' + selected.email}>
                      <i className="fas fa-envelope"></i>
                      {'  ' + selected.email}
                    </a>

                    <a href={'phoneto:' + selected.home_phone}>
                      <i className="fas fa-phone"></i> {selected.home_phone}
                    </a>
                  </div>
                  <h4>Horaires d&apos;ouverture :</h4>

                  <div className="section_ou_nous_trouver__opening_hours">
                    <ul>
                      <li>Lundi</li>
                      <li>Mardi</li>
                      <li>Mercredi</li>
                      <li>Jeudi</li>
                      <li>Vendredi</li>
                      <li>Samedi</li>
                      <li>Dimanche</li>
                    </ul>

                    <ul>
                      {opticianHours &&
                        opticianHours.map((hour, index: number) => {
                          return (
                            <li key={index}>
                              {hour.start_morning} {hour.end_morning} /{' '}
                              {hour.start_afternoon} {hour.end_afternoon}{' '}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </InfoWindow>
            ) : null}
          </GoogleMap>
          <div className="section_ou_nous_trouver__child1"></div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Maps;
