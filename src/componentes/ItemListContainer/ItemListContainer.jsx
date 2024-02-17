import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { db } from '../../services/config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect(() => {
      const miCatalogo = idCategoria ? 
        query(collection(db, "catalogo"), where("genero", "==", idCategoria)) : 
        query(collection(db, "catalogo"));

      getDocs(miCatalogo)
        .then(res => {
          const itemsCatalogo = res.docs.map(doc => {
            const data = doc.data();
            return {id: doc.id, ...data};
          })
          setProductos(itemsCatalogo);
        })
        .catch(error => console.error(error))
    }, [idCategoria]);

  return (
    <div className='contenedortituloTienda'>
        <h2 className='tituloTienda'>Mi música</h2>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer