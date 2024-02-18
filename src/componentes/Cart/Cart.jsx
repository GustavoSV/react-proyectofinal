import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import './Cart.css';

const Cart = () => {
    const {carrito, vaciarCarrito, totalCompra, cantidadCompra} = useContext(CartContext);

    if (cantidadCompra === 0) {
        return (
            <>
            <div className="contenedortituloItemsCart">
                <h3 className="tituloItemsCart">Carrito de compras</h3>
            </div>
                <div className="contenedorItemsCart">
                    <div className="contenedorBotones">
                        <h2>No hay productos en el carrito</h2>
                        <Link className="boton" to="/">Ver Productos</Link>
                    </div>
                </div>
            </>
        )
    }

  return (
    <div>
        <div className="contenedortituloItemsCart">
            <h3 className="tituloItemsCart">Carrito de compras</h3>
        </div>
        <div className="contenedorItemsCart">
            {
                carrito.map(prod => <CartItem key={prod.id} {...prod}/>)
            }
            <h3 className="valorTotal"> Total: ${totalCompra}</h3>
            <div className="contenedorBotones">
                <button className="boton" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
                <Link className="boton" to="/checkout"> Finalizar compra </Link>
            </div>
        </div>
    </div>
  )
}

export default Cart