import React, { useRef } from 'react'
import { Button, Card, Flex } from 'antd'
import AddItemButton from '../AddItemButton/AddItemButton';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import Description from '../Description/Description';
const { Meta } = Card;

const ItemDetail = ({item}) => {
  //const [ selectedItem, setSelectedItem]

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
            <AddItemButton getItem={getUpdatedItem} />
          ]}
        >
          <Meta
            title={item.name}
            description={item.description}
          />
        </Card>
        <Flex vertical gap={'large'}>
          <Description item={item} />
          <Button type="primary">Finalizar compra</Button>
        </Flex>
      </Flex>
    </>
  )
}

export default ItemDetail