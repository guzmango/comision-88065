import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

import { catalogoLibros } from '../data/catalogo'

function ItemListContainer({msg}) {

  const [items, setItems] = useState([]);

  {/* Uso del hook useParams() de react router para leer el segmento actual de la URL y mostrar el contenido correspondiente. */}
  const {genre} = useParams();

  // llamado asíncrono a "Promises" que resuelvan luego de un breve retardo los datos solicitados (listado de productos, un producto)
  useEffect(() => {
    const fetchCatalog = new Promise((resolve) => {
      setTimeout(() => {
        resolve(catalogoLibros)
      }, 2000)
    })

    fetchCatalog.then((data) => {
      setItems(data)
    })
  }, [])

  return (
    <div>
      <h2>{msg}</h2>
      {!genre && <p>This is our entire catalog of books. To browse a specific genre, please click on the menu.</p>}
      {genre && <h3>{genre}</h3>}
      <ItemList items={items} selectedCategory={genre} />
    </div>
  )
}

export default ItemListContainer