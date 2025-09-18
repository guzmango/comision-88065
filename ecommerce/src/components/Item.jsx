import { Link } from "react-router-dom"

function Item({nombre, precio, autor, id}) {
    return (
        <div className="card">
            {/* Seleccionar un producto del listado y acceder a una vista en detalle del mismo */}
            <Link to={`/products/${id}`}>{nombre}</Link>
            <p><i>{autor}</i></p>
            <p><b>Price: </b>${precio}</p>

            {/* TODO */}
            {/* agregar interfaz que posteriormente les permita agregar unidades al carrito. */}
        </div>
    )
}

export default Item