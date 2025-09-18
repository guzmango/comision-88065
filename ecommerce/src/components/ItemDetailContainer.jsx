import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { catalogoLibros } from '../data/catalogo'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const [product, setProduct] = useState({}); 

    {/* Uso del hook useParams() de react router para leer el segmento actual de la URL y mostrar el contenido correspondiente. */}
    const {id} = useParams();

    //Los componentes contenedores harán un llamado asíncrono a "Promises" 
    // que resuelvan luego de un breve retardo los datos solicitados (un producto)
    useEffect(() => {
        const fetchProduct = new Promise((resolve) => {
            setTimeout(() => {
                const prod = catalogoLibros.find((book) => book.id === id);
                resolve(prod)
            }, 1000)
        })

        fetchProduct.then((data) => {
            setProduct(data)
        })
    }, [])

    // const product = catalogoLibros.find((book) => book.id === id);

    if (!product) {
        return <h2>Product not found</h2>
    }

    return (
        <>
            <ItemDetail
                key={product.id}
                {...product}
            ></ItemDetail>
        </>
    )
}

export default ItemDetailContainer