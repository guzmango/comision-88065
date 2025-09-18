import React from 'react'
import { useParams } from 'react-router-dom'
import { catalogoLibros } from '../data/catalogo'

function ItemDetailContainer() {

    {/* Uso del hook useParams() de react router para leer el segmento actual de la URL y mostrar el contenido correspondiente. */}
    const {id} = useParams();

    const product = catalogoLibros.find((book) => book.id === id);

    if (!product) {
        return <h2>Product not found</h2>
    }

    return (
        <div>
            <h2>Product Detail</h2>
            <h3>{product.nombre}</h3>
            <p><b>Author: </b>{product.autor}</p>
            <p><b>Genre: </b>{product.genero}</p>
            <p><b>Rating: </b>{product.calificacion} stars</p>
            <p><b>Price: </b>${product.precio}</p>
        </div>
    )
}

export default ItemDetailContainer