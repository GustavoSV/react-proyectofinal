import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { getProductos, getProductoCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect( () => {
        const funcionTraerProductos = idCategoria ? getProductoCategoria : getProductos;

        funcionTraerProductos(idCategoria)
            .then(resolve => setProductos(resolve))
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