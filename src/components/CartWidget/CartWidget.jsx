import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const CartWidget = () => {
  return (
    <>
      <Button>
        <ShoppingCartOutlined />
        Carrito (5)
      </Button>
    </>
  )
}

export default CartWidget