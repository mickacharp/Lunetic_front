import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import arrowDown from '../assets/arrow-down.png';
import arrowUp from '../assets/arrow-up.png';
import letter from '../assets/letter.png';
import profil from '../assets/profil.png';
import CurrentOpticianContext from '../contexts/CurrentOptician';
import PositionYContext from '../contexts/PositionY';

const Sidebar = () => {
  const { idOptician } = useContext(CurrentOpticianContext);
  const { scroll, setScroll, test, numberDiv2, numberDiv3, numberDiv4 } =
    useContext(PositionYContext);
<<<<<<< HEAD
  console.log(scroll);
  return (
    <div className="sidebar">
      <div className="sidebar__letter">
        <div className="sidebar__box">
          <img src={letter} alt="letter" />
=======

  return (
    <div className="sidebar">
      <Link to="/contact">
        <div className="sidebar__letter">
          <div className="sidebar__box">
            <img src={letter} alt="letter" />
          </div>
>>>>>>> 54657e93b1fb44327507eb8966fad183ab6a3cbf
        </div>
      </Link>

      <Link to={idOptician == 0 ? '/login' : '/optician-profile'}>
        <div className="sidebar__profil">
          <div className="sidebar__box">
            <img src={profil} alt="profil" />
          </div>
        </div>
      </Link>
      <div className="sidebar__navigation">
        <a href={`#${scroll}`}>
          <div
            className="sidebar__arrow-up"
            onClick={() => (scroll === 1 ? setScroll(1) : setScroll(scroll - 1))}>
            <img src={arrowUp} alt="arrow-up" />
          </div>
        </a>
        <div className="sidebar__container-anchor">
          <div className={scroll === 1 ? 'sidebar__anchor-orange' : 'sidebar__anchor'} />
          <div className={scroll === 2 ? 'sidebar__anchor-orange' : 'sidebar__anchor'} />
          <div className={scroll === 3 ? 'sidebar__anchor-orange' : 'sidebar__anchor'} />
          <div className={scroll === 4 ? 'sidebar__anchor-orange' : 'sidebar__anchor'} />
        </div>
        <a href={`#${scroll}`}>
          <div
            className="sidebar__arrow-down"
            onClick={() => (scroll === 4 ? setScroll(4) : setScroll(scroll + 1))}>
            <img src={arrowDown} alt="arrow-down" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
