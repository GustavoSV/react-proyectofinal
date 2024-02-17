import { useState, createContext } from "react";

export const CartContext = createContext({
    carrito: [],
    totalCompra: 0,
    cantidadCompra: 0
});

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [totalCompra, setTotalCompra] = useState(0);
    const [cantidadCompra, setCantidadCompra] = useState(0);

    console.log(carrito);
    console.log("Valor total compra: ", totalCompra);
    console.log("Cantidad de ítems: ", cantidadCompra);

    // Funciones que expondrá el CartContext a los demás componentes
    const agregarAlCarrito = (item, cantidad) => {
        const productoExiste = carrito.find(prod => prod.item.id === item.id);

        setCantidadCompra(prev => prev + cantidad);
        setTotalCompra(prev => prev + (item.precio * cantidad));

        if (!productoExiste) {
            setCarrito(prev => [...prev, {item, cantidad}]);
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad}
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
        }
    }

    const eliminarPdtoCarrito = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === item.id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
        setCantidadCompra(prev => prev - productoEliminado.cantidad);
        setTotalCompra(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadCompra(0);
        setTotalCompra(0);
    }

    // se retornan todos los elementos del CartContext 

    // también se devuelve el elemento 'children' que es una propiedad especial que identifica a todos los componentes que puedan utilizar el CartContex, sus datos y sus funciones

    return (
        <CartContext.Provider value={{carrito, totalCompra, cantidadCompra, agregarAlCarrito, eliminarPdtoCarrito, vaciarCarrito}}> {children} </CartContext.Provider>
    )
}