import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import pictoRondLunette from '../assets/PICTO_ROND_LUNETTE.png';
import CurrentOpticianContext from '../contexts/CurrentOptician';
import IOrders from '../interfaces/IOrders';

const OpticianOrders = () => {
  const { idOptician } = useContext(CurrentOpticianContext);
  const [ordersList, setOrdersList] = useState<Array<IOrders>>([]);

  useEffect(() => {
    if (idOptician != 0) {
      axios
        .get(`http://localhost:4000/api/opticians/${idOptician}/orders`)
        .then((results) => results.data)
        .then((data) => setOrdersList(data));
    }
  }, [idOptician]);

  return (
    <div className="optician_orders_component_container">
      <div className="optician_orders_container">
        <Link to="/optician-home">
          <p id="close" className="optician_orders_container__close">
            FERMER
          </p>
        </Link>
        <div className="optician_orders_container__orders_list">
          <h3>Liste des Commandes</h3>
          <ul>
            {ordersList &&
              ordersList.map((order, index) => (
                <li key={index}>
                  <div className="optician_orders_container__order_item">
                    <div>
                      <h4>Numero de commande : </h4>
                      <p>{order.order_number}</p>
                    </div>
                    <div>
                      <h4>Date de la commande : </h4>
                      <p>{order.date}</p>
                    </div>
                  </div>
                  <div className="optician_orders_container__pdf_link">
                    <a href={order.link_pdf} target="_blank" rel="noreferrer">
                      Voir la facture
                    </a>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="optician_orders_container__titleDiv">
          <h2>Commandes</h2>
          <img src={pictoRondLunette} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OpticianOrders;
