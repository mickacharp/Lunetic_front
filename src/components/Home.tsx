import React from 'react';
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <div className="home">
      <div className="home__carrousel">
        <div className="home__text">
          <h2>#lunetic</h2>
          <div className="home__title">
            <h1>
              Hanoi Designers
              <br />
              Meetup
            </h1>
            <div className="home__underline" />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the
            <br />
            printing and typesetting industry.{' '}
            <span className="black-text">Lorem Ipsum</span>
            <br /> has been the industry's standard dumm
          </p>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Home;
