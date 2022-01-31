import React from 'react';

type Props = { title: string; subtitle: string; text: string; link_picture: string };

const NewsCard: React.FC<Props> = ({ title, subtitle, text, link_picture }) => {
  return (
    <div className="newsCard">
      <div className="newsCard__leftContainer">
        <div className="newsCard__title">{title}</div>
        <div className="newsCard__subtitle">{subtitle}</div>
        <br />
        <div className="newsCard__text">{text}</div>
      </div>

      <div className="newsCard__img">
        <img src={link_picture} alt="News" />
      </div>
    </div>
  );
};

export default NewsCard;
