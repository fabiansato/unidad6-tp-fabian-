/*
 En este ejemplo usé la API rest de pruebas y gratuita llamada fakestoreapi y guarde todos los datos de la api rest en variables que use dentro de los divs

lo bueno de esta api que es parecida al trabajo anterior y pude usar id, titulo, precio, descriopcion y categoria. Le agregue imagens y el botton de detalle que solamente muestra un texto (al igua
  que el que hicmos en comprar) Use fetch para traer los datos de la API, tambien THEN y catch por las dudas si surge un error

  Tambien realize el trabajo de un poco de CSS responsive (se que se puede mejorar pero es mas que nada para que se vea limpio el resultado)
*/
import React, { useState, useEffect } from "react";
import './ProductDetails.css';
const Product = ({ id, title, description, price, image, category }) => {
  const [message, setMessage] = useState("");
  const [messageDetalle, setMessageDetalle] = useState("");

  const handleBuy = () => {
    setMessage("Gracias por su compra");
  };

  const handleDetalle = () => {
    setMessageDetalle("Este es el detalle");
  };

  return (
    <div className="product-details-container">
    <div className="product-image">
      <img src={image} alt={title} />
    </div>
    <div className="product-details">
      <h3>{id}</h3>
      <h2>{title}</h2>
      <p>Precio: {price}</p>
      <p>{description}</p>
      <p>Categoria: {category}</p>
      <button onClick={handleBuy}>Comprar</button>
      {message && <p className="message">{message}</p>}
      <button onClick={handleDetalle}>Detalle</button>
      {messageDetalle && <p className="message">{messageDetalle}</p>}
    </div>
  </div>
  );
};

const ProductDetails = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Detalles del producto</h1>
      {productos.map((producto) => (
        <Product
          key={producto.id}
          id={producto.id}
          title={producto.title}
          description={producto.description}
          category={producto.category}
          price={producto.price}
          image={producto.image}
        />
      ))}
    </div>
  );
};

export default ProductDetails;
