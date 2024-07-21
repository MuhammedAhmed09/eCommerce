import React, { useContext } from 'react'
import { ProductContext } from './AppContext'

const Cart = () => {
    const { cart } = useContext(ProductContext);
    return (
        <>
        {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                {cart.map((product) => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>Price: {product.price}</p>
                    </div>
                ))}
                </>
            )
        }
        </>
    )
}

export default Cart
