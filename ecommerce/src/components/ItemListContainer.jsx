import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

import { catalogoLibros } from '../data/catalogo'

function ItemListContainer({msg}) {

  const [items, setItems] = useState([]);

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
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer