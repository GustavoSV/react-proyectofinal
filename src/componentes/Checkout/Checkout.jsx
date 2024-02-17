import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

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
        addDoc(collection(db, "ordenes"), ordenCompra)
            .then(docRef => {
                setOrdenId(docRef.id);
                // limpiamos el formulario
                setApellido("");
                setEmail("");
                setEmail2("");
                setNombre("");
                setTelefono("");
                // vaciamos el carrito
                vaciarCarrito();
            })
            .catch(error => {
                console.error("ERROR creando la orden de compra: ", error);
                setError("NO se pudo crear la orden de compra");
            });

    }

  return (
    <div>
        <h2>Checkout - Finalizar la compra</h2>
        <form onSubmit={manejadorSubmit}>
            {
                carrito.map(pdt => (
                    <div key={pdt.item.id}>
                        <p>{pdt.item.titulo} x {pdt.cantidad}</p>
                        <p>{pdt.item.precio}</p>
                        <hr/>
                    </div>
                ))
            }
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

            {
                error && <p style={{ color: "red" }}> {error} </p>
            }

            <button> Finalizar orden </button>

            {
                ordenId && <strong> El número aprobado de orden es: {ordenId}. !Gracias por su compra!</strong>
            }
        </form>
    </div>
  )
}

export default Checkout