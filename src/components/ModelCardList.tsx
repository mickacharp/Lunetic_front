import axios from 'axios';
import React, { useEffect, useState } from 'react';

import IModels from '../interfaces/IModels';
import ModelCard from './ModelCard';

const ModelCardList = () => {
  const [glassesList, setGlassesList] = useState<Array<IModels>>([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/models')
      .then((res) => res.data)
      .then((data) => setGlassesList(data));
  }, []);

  return (
    <div className="modelcard-list">
      {glassesList.map((glass) => (
        <ModelCard
          key={glass.id_model}
          idModel={glass.id_model}
          name={glass.name}
          mainImg={glass.main_img}
          text={glass.text}
        />
      ))}
    </div>
  );
};

export default ModelCardList;
