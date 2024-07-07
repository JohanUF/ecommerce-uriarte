import React, { useContext, useState } from 'react'
import { Button } from 'antd';
import { CartContext } from '../../context/cartContext';

const AddItemButton = ({ getItem }) => {
  const { addItem, updateItem, isInCart } = useContext(CartContext)
  
  const handleClick = () => {
    const item = getItem()
    
    if (isInCart(item.id)){
      updateItem(item)
    }
    else {
      addItem(item)
    }
  }

  return (
    <Button type="primary" onClick={() => { handleClick() }}>Agregar al carrito</Button>
  )
}

export default AddItemButton