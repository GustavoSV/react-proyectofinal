import "./ItemDetail.css";

const ItemDetail = ({id, titulo, autor, genero, tipo, idioma, stock, precio, img, }) => {
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
        <h2>Precio: {precio}</h2>
      </div>
    </div>
  );
}

export default ItemDetail