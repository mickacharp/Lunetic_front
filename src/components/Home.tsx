import React from 'react';

import Maps from './Maps';
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Maps />
    </div>
  );
};

export default Home;
