import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// importamos nuestro proveedor de contexto
// import { CarritoProvider } from './context/CarritoContext'

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <CarritoProvider> */}
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<ItemDetailContainer />} />
          </Routes>
        {/* </CarritoProvider> */}
      </BrowserRouter>
    </>
  )
}

export default App