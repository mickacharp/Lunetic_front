import React from 'react';

const NewsCard = () => {
  return (
    <div className="newsCard">
      <div className="newsCard__leftContainer">
        <div className="newsCard__title">TELA VOTIVE</div>
        <div className="newsCard__subtitle">GLASS</div>
        <br />
        <div className="newsCard__text">
          T H I S E L E G A N T G L A S S C A N D L E H O L D E R S W I L L B E C O M E A
          P E R F E C T D E C O R P I E C E F O R Y O U R K I T C H E N . T H E I R E R G
          O N O M I C F O R M W I L L B R I N G B A L A N C E T O Y O U D I N I N G T A B
          L E . L I G H T A C A N D L E A N D E N J O Y Y O U R R O M A N T I C D I N N E
          R .
        </div>
      </div>

      <div className="newsCard__img">
        <img
          src="https://www.villedefloing.com/wp-content/uploads/2015/05/news2.jpg"
          alt="News"
        />
      </div>
    </div>
  );
};

export default NewsCard;
