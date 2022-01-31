import React, { useContext } from 'react';
import { Link } from 'react-scroll';

import arrowDown from '../assets/arrow-down.png';
import arrowUp from '../assets/arrow-up.png';
import PositionYContext from '../contexts/PositionY';
import LetterProfil from './LetterProfil';

const Sidebar = ({ anchor }: any) => {
  const { scroll, setScroll } = useContext(PositionYContext);

  const arrayTest = [];
  for (let i = 1; i <= anchor; i++) {
    arrayTest.push(i);
  }

  return (
    <div className="sidebar">
      <LetterProfil />
      <div className="sidebar__navigation">
        <Link
          to={`${scroll - 1}`}
          smooth={true}
          duration={1000}
          onClick={() => (scroll === 1 ? setScroll(1) : setScroll(scroll - 1))}>
          <div className="sidebar__arrow-up">
            <img src={arrowUp} alt="arrow-up" />
          </div>
        </Link>
        <div className="sidebar__container-anchor">
          {arrayTest.map((el) => (
            <div
              key={el}
              className={scroll === el ? 'sidebar__anchor-orange' : 'sidebar__anchor'}
            />
          ))}
        </div>
        <Link
          to={`${scroll + 1}`}
          smooth={true}
          duration={1000}
          onClick={() => (scroll === anchor ? setScroll(anchor) : setScroll(scroll + 1))}>
          <div className="sidebar__arrow-down">
            <img src={arrowDown} alt="arrow-down" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
