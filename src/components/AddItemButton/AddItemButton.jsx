import React, { useContext, useState } from 'react'
import { Button } from 'antd';
import { CartContext } from '../../context/cartContext';

const AddItemButton = ({ setItemState, item, getItemQuantity }) => {
  const { addItem, updateItem, isInCart } = useContext(CartContext)
  
  const handleClick = () => {
    item = {...item, quantity: getItemQuantity()}
    
    if (isInCart(item.id)){
      updateItem(item)
    }
    else {
      addItem(item)
    }

    setItemState(item)
  }  

  return (
    <Button type="primary" onClick={() => { handleClick() }}>Agregar al carrito</Button>
  )
}

export default AddItemButton