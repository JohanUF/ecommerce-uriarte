import React from 'react'
import { Card, Descriptions, Flex } from 'antd'
import { Link } from 'react-router-dom'
import AddItemButton from '../AddItemButton/AddItemButton';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import Description from '../Description/Description';
const { Meta } = Card;

const ItemDetail = ({item}) => {

  const itemDetail = [
    {
      key: '1',
      label: 'Nombre',
      children: item.name,
    },
    {
      key: '2',
      label: 'Categoria',
      children: item.category,
    },    
    {
      key: '3',
      label: 'Descripción',
      children: item.description,
    },
    {
      key: '4',
      label: 'Precio',
      children: item.price,
    },
    {
      key: '5',
      label: 'Stock',
      children: item.stock,
    }
  ]

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
            <ItemQuantitySelector />,
            <AddItemButton item={itemDetail} />
          ]}
        >
          <Meta
            title={item.name}
            description={item.description}
          />
        </Card>
        <Description item={itemDetail} />
      </Flex>
    </>
  )
}

export default ItemDetail