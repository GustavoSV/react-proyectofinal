import './CartItem.css'

const CartItem = ({item, cantidad}) => {
  return (
    <div className='contenedorCartItem'>
        <img src={item.img} alt={item.titulo} />
        <h3> {item.titulo} </h3>
        <p> Cantidad: {cantidad} </p>
        <p> Precio: {item.precio} </p>
    </div>
  )
}

export default CartItem