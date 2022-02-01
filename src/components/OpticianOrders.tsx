import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CurrentOpticianContext from '../contexts/CurrentOptician';
import IOrders from '../interfaces/IOrders';
import pictoRondLunette from '../assets/PICTO_ROND_LUNETTE.png';

const OpticianOrders = () => {
  const { idOptician } = useContext(CurrentOpticianContext);
  const [ordersList, setOrdersList] = useState<Array<IOrders>>([]);
  console.log(ordersList);

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
        <Link to="/">
          <p id="close" className="login-container__close">
            FERMER
          </p>
        </Link>
        <div className="optician_orders_container__orders_list">
          <h3>Liste des Commandes</h3>
          <ul>
            {ordersList &&
              ordersList.map((order) => (
                <li>
                  <div className="optician_orders_container__order_item">
                    <h4>{`Numero de commande : ${order.order_number}`} </h4>
                    <h4>{`Date de la commande : ${order.date}`}</h4>
                  </div>
                  <div className="optician_orders_container__pdf_link">
                    <a href={order.link_pdf} target="_blank">
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
