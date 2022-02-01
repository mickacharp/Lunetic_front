import React, { useContext } from 'react';
import { Link } from 'react-scroll';

import arrowDown from '../assets/arrow-down.png';
import arrowUp from '../assets/arrow-up.png';
import PositionYContext from '../contexts/PositionY';
import LetterProfil from './LetterProfil';

type Props = {
  anchor: number;
};

const Sidebar: React.FC<Props> = ({ anchor }) => {
  const { scroll, setScroll } = useContext(PositionYContext);

  // Detect the number of anchor in a page and then adapt the sidebar on the page
  const numberAnchor = [];
  for (let i = 1; i <= anchor; i++) {
    numberAnchor.push(i);
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
          {numberAnchor.map((el) => (
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
