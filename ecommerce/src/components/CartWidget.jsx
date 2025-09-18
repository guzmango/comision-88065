import React from 'react'
import cart from '../assets/shopping-cart.png';

function CartWidget() {
    return (
        <div>
            <img src={cart} alt="Logo" width="24px" /> Carrito (0)
        </div>
    )
}

export default CartWidget