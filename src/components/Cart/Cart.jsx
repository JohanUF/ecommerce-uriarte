import React, { useContext } from 'react'
import { List, Card, Button, Flex } from 'antd';
import { CartContext } from '../../context/cartContext';
import Description from '../Description/Description';
import { Link } from 'react-router-dom';


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
              <Flex gap={'large'}>
                <Card
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={item.img} />}
                actions={[
                  <Button type="primary" onClick={() => { removeItem(item.id) }}>Eliminar producto</Button>
                ]}>
                  <Meta />
                </Card>
                <Description item={item}/>
              </Flex>
            </List.Item>
        )}
      /> : <h3>{"El carrito está vacío. "}<Link to={'/'}>Volver a la tienda</Link></h3>}
    </>
  )
}

export default Cart