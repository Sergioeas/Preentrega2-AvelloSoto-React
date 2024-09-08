import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    /* ************DETALLE DE LOS PRODUCTOS********************* */
    const asyncMock = [
      { id: 1, name: 'Computador Gamer', description: 'Computador potente para juegos con tarjeta gráfica de última generación.', price: 1500 },
      { id: 2, name: 'Notebook Gamer', description: 'Notebook con procesador rápido y pantalla de alta resolución ideal para gaming.', price: 1200 },
      { id: 3, name: 'Item 3', description: 'Descripción del Item 3', price: 50 },
    ];
  
    const foundItem = asyncMock.find(item => item.id === parseInt(id));
    setItem(foundItem);
  }, [id]);

  return (
    <div>
      {item ? (
        <>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;