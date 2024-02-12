import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getUnProducto } from "../../asyncmock";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect( () => {
        getUnProducto(idItem)
            .then((respuesta) => setProducto(respuesta))
    }, [idItem]);

  return (
    <div>
        <h2 className="tituloItemDetail">Detalle del producto</h2>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer