import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartComponentContext = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item) => {
        setCart([...cart, item])
    }

    const updateItem = (updatedItem) => {
        const updatedCart = cart.map((item) => {
            return item.id == updatedItem.id ? {...item, quantity : item.quantity + updatedItem.quantity } : item
        })

        setCart(updatedCart)
    }

    const removeItem = (itemId) => {
        const cartModified = cart.filter((item) => item.id != itemId)
        setCart(cartModified)
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.find((item) => item.id == itemId) ? true : false
    }

    return (
        <CartContext.Provider value={{ cart, addItem, updateItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}