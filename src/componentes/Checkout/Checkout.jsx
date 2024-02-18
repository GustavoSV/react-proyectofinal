import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import './Checkout.css';

const Checkout = () => {
    const {carrito, totalCompra, vaciarCarrito} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    // Funciones de actualización de la compra
    const manejadorSubmit = (event) => {
        event.preventDefault();

        // verificamos que los campos tengan info
        if (!nombre || !apellido || !telefono || !email || !email2) {
            setError("DEBE diligenciar la totalidad de los campos");
            return;
        }

        // validamos coincidencia del email
        if (email !== email2) {
            setError("NO coinciden los emails");
            return;
        }

        // creamos objeto con los datos de la orden
        const ordenCompra = {
            items: carrito.map(pdt => ({
                id: pdt.item.id,
                titulo: pdt.item.titulo,
                cantidad: pdt.cantidad
            })),
            total: totalCompra,
            fecha: new Date(),
            cliente: {
                nombre,
                apellido,
                telefono,
                email
            }
        }

        // almacenamos en la base de datos
        Promise.all(
            ordenCompra.items.map(async (itemOrden) => {
                const itemRef = doc(db, "catalogo", itemOrden.id);
                const itemDoc = await getDoc(itemRef);
                const stockActual = itemDoc.data().stock;

                await updateDoc(itemRef, {stock: stockActual - itemOrden.cantidad});
            })
        )
        .then(() => {
            addDoc(collection(db, "ordenes"), ordenCompra)
            .then(docRef => {
                setOrdenId(docRef.id);
                // limpiamos el formulario
                setApellido("");
                setEmail("");
                setEmail2("");
                setNombre("");
                setTelefono("");
                setError("");
                // vaciamos el carrito
                vaciarCarrito();
                // mostramos el ID de la orden
                Swal.fire({
                    title: "Se ha procesado exitosamente tu compra",
                    text: `El número de tu orden es: ${docRef.id}`,
                    icon: "success",
                    
                });
                window.location.href = "/";
                
            })
            .catch(error => {
                console.error("ERROR creando la orden de compra: ", error);
                setError("NO se pudo crear la orden de compra");
            });
        })
        .catch(error => {
            console.error("NO se pudo actualizar el stock", error);
            setError("Error al actualizar el stock");
        })
    }

  return (
    <div>
        <div className="contenedortituloCheckout">
            <h2 className="tituloCheckout">Checkout - Finalizar la compra</h2>
        </div>
        <div className="contenedorCheckout" >
            <form onSubmit={manejadorSubmit}>
                {
                    carrito.map(pdt => (
                        <div className="cardCheckout" key={pdt.item.id}>
                            <h3>{pdt.item.titulo}</h3>
                            <p>Cantidad a comprar: {pdt.cantidad}</p>
                            <p>Valor compra: ${pdt.item.precio}</p>
                            <hr/>
                        </div>
                    ))
                }
                <div className="formularioPago">
                    <h3>Ingrese sus datos</h3>
                    <div>
                        <label htmlFor="nombre"> Nombre </label>
                        <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                    </div>
                    <div>
                        <label htmlFor="apellido"> Apellido </label>
                        <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} value={apellido}/>
                    </div>
                    <div>
                        <label htmlFor="telefono"> Telefono </label>
                        <input type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
                    </div>
                    <div>
                        <label htmlFor="email"> Email </label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div>
                        <label htmlFor="email2"> Repetir Email </label>
                        <input type="email" id="email2" onChange={(e) => setEmail2(e.target.value)} value={email2}/>
                    </div>
                    <button className="botonCheckout" disabled={carrito.length === 0}> Finalizar orden </button>
                </div>

                {
                    // error && <p style={{ color: "red" }}> {error} </p>
                    error && <p className="mensajeError"> {error} </p>
                }
            </form>
        </div>
    </div>
  )
}

export default Checkout