import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();

    useEffect(() => {
      const nuevoDoc = doc(db, "catalogo", idItem);

      getDoc(nuevoDoc)
        .then(res => {
          const data = res.data();
          const nuevoItem = {id: res.id, ...data};
          setProducto(nuevoItem);
        })
        .catch(error => console.error("Hubo problemas con la consulta", error))

    }, [idItem])
  return (
    <div>
        <h2 className="tituloItemDetail">Detalle del producto</h2>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer