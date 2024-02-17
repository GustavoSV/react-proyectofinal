import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const {cantidadCompra} = useContext(CartContext);
    return (
        <div>
            <Link to="/cart">
                <img className='imagenCarrito' src="../public/img/shopping-cart-100.png" alt="Carrito de compras" />
                {
                    cantidadCompra > 0 && <strong> {cantidadCompra} </strong>
                }
                
            </Link>
        </div>
    )
}

export default CartWidget