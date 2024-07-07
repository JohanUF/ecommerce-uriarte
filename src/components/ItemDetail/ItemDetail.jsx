import React, { useContext, useRef, useState } from 'react'
import { Button, Card, Flex } from 'antd'
import AddItemButton from '../AddItemButton/AddItemButton';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import Description from '../Description/Description';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
const { Meta } = Card;

const ItemDetail = ({item}) => {
  const { cart } = useContext(CartContext)
  const [ itemAdded, setItemAdded ] = useState({})

  const quantityRef = useRef(1)

  const handleUpdateQuantity = (value) => {
    quantityRef.current = value
  }

  const getUpdatedItem = () => {
    return {...item, quantity: quantityRef.current}
  }

  return (
    <>
      <Flex gap={'large'}>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src={item.img}
            />
          }
          actions={[
            <ItemQuantitySelector handleUpdateQuantity={handleUpdateQuantity} />,
            <AddItemButton getItem={getUpdatedItem} setItemAdded={setItemAdded}/>
          ]}
        >
          <Meta
            title={item.name}
            description={item.description}
          />
        </Card>
        <Flex vertical gap={'large'}>
          <Description item={item} />
          {itemAdded?.quantity > 0 ? <Link to={'/cart'}><Button type="primary">Finalizar compra</Button></Link> : <></>}
        </Flex>
      </Flex>
    </>
  )
}

export default ItemDetail