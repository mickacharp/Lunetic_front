import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import arrowDown from '../assets/arrow-down.png';
import arrowUp from '../assets/arrow-up.png';
import letter from '../assets/letter.png';
import profil from '../assets/profil.png';
import CurrentOpticianContext from '../contexts/CurrentOptician';
import PositionYContext from '../contexts/PositionY';

const Sidebar = ({ anchor }: any) => {
  const { idOptician } = useContext(CurrentOpticianContext);
  const { scroll, setScroll } = useContext(PositionYContext);

  const arrayTest = [];
  for (let i = 1; i <= anchor; i++) {
    arrayTest.push(i);
  }

  return (
    <div className="sidebar">
      <Link to="/contact">
        <div className="sidebar__letter">
          <div className="sidebar__box">
            <img src={letter} alt="letter" />
          </div>
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
          {arrayTest.map((el) => (
            <div
              key={el}
              className={scroll === el ? 'sidebar__anchor-orange' : 'sidebar__anchor'}
            />
          ))}
        </div>
        <a href={`#${scroll}`}>
          <div
            className="sidebar__arrow-down"
            onClick={() =>
              scroll === anchor ? setScroll(anchor) : setScroll(scroll + 1)
            }>
            <img src={arrowDown} alt="arrow-down" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
