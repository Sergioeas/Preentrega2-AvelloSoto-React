import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/App.css';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    /* *************PROCUTOS POR ID******* */
    const asyncMock = [
      {
        id: 1,
        name: 'Computador Gamer',
        category: 'electronics',
        description: 'Computador potente para juegos con tarjeta gráfica de última generación.',
        price: 1500,
        image: '../assets/computador-gamer.webp'
      },
      {
        id: 2,
        name: 'Notebook Gamer',
        category: 'electronics',
        description: 'Portátil con alta capacidad gráfica para gaming.',
        price: 1200,
        image: '../assets/notebook-gamer.jpg'
      },
      {
        id: 3,
        name: 'Teclado Mecánico Gamer',
        category: 'electronics',
        description: 'Teclado RGB con switches mecánicos.',
        price: 100,
        image: '/assets/teclado-mecanico.webp'
      }
    ];

    const filteredItems = categoryId
      ? asyncMock.filter(item => item.category === categoryId)
      : asyncMock;

    setItems(filteredItems);
  }, [categoryId]);

  return (
    <div className="container">
      <h1>Catálogo de productos</h1>
      <div className="product-list">
        {items.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h2 className="product-name">{item.name}</h2>
            <p className="product-description">{item.description}</p>
            <p className="product-price">${item.price}</p>
            <Link to={`/item/${item.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;