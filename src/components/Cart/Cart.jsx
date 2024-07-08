import React, { useContext } from 'react'
import { List, Card, Button, Flex } from 'antd';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import CartItem from '../CartItem/CartItem';

const { Title } = Typography;


const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext)
  const { Meta } = Card;

  const total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

  return (
    <>
      {cart?.length > 0 ?
      <List
        header={<div>Productos</div>}
        footer={
          <div>
            <Flex vertical gap={'middle'}>
              <b>Total: S/ {total}</b>
              <Link to={'/checkout'}><Button type="primary">Finalizar compra</Button></Link>
              <Link><Button type="primary" danger onClick={() => {clear()}}>Vaciar carrito</Button></Link>
            </Flex>
          </div>}
        bordered
        dataSource={cart}
        renderItem={(item) => (
            <List.Item>
              <CartItem cartItem={item} cartRemoveItem={removeItem}/>
            </List.Item>
        )}
      /> : <Title level={3}>{"El carrito está vacío. "}<Link to={'/'}>Volver a la tienda</Link></Title >}
    </>
  )
}

export default Cart