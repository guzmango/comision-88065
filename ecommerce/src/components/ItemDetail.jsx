import ItemCount from './ItemCount'

function ItemDetail({nombre, autor, genero, calificacion, precio}) {
    return (
        <div>
            <h2>Product Detail</h2>
            <h3>{nombre}</h3>
            <p><b>Author: </b>{autor}</p>
            <p><b>Genre: </b>{genero}</p>
            <p><b>Rating: </b>{calificacion} stars</p>
            <p><b>Price: </b>${precio}</p>
            {/* interfaz que posteriormente permita agregar unidades al carrito. */}
            <ItemCount/>
        </div>
    )
}

export default ItemDetail