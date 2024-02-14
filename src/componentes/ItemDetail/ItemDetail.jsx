import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({id, titulo, autor, genero, tipo, idioma, stock, precio, img }) => {
  const [kComprada, setKComprada] = useState(0);

  const manejadorKComprada = (cantidad) => {
    setKComprada(cantidad);
    console.log("Cantidad comprada: ", cantidad);
  }

  return (
    <div className="itemDetalleContenedor">
      <div className="itemDetalle">
        <img src={img} alt={titulo} />
        <h2>{titulo}</h2>
        <h4>Id: {id}</h4>
        <h3>Autor: {autor}</h3>
        <p>Género: {genero}</p>
        <p>Idioma: {idioma}</p>
        <p>Disponible en: {tipo}</p>
        <p>Cantidad existente: {stock}</p>
        <h2>Precio: {precio}</h2>
        
        {
          kComprada > 0 ?
            (<Link to="/cart"> Terminar compra</Link>) :
            (<ItemCount inicial = {1} stock = {stock} funcionAgregar = {manejadorKComprada}/>)
        }
      </div>
    </div>
  );
}

export default ItemDetail