import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    const {carrito, vaciarCarrito, totalCompra, cantidadCompra} = useContext(CartContext);

    if (cantidadCompra === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/">Ver Productos</Link>
            </>
        )
    }

  return (
    <div>
        {
            carrito.map(prod => <CartItem key={prod.id} {...prod}/>)
        }
        <h3> Total: ${totalCompra}</h3>
        <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
        <Link to="/checkout"> Finalizar compra </Link>
    </div>
  )
}

export default Cart