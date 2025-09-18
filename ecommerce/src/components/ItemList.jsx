import React from 'react'

import Item from './Item'

function ItemList({ items, selectedCategory }) {

    const filteredItems = selectedCategory ? items.filter(item => item.genero === selectedCategory) : items;

    return (
        <>
            {/* Visualizar el listado, filtrando según la elección. */}
            {/* Uso del método Array.map() y la prop "key" para listar todos los productos en el catálogo. */}
            {filteredItems.map((item) => (
                <Item
                    key={item.id}
                    {...item}
                ></Item>
            ))}
        </>
    )
}

export default ItemList