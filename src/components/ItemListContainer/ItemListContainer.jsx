import React from 'react'
import { Typography } from 'antd';
const { Title } = Typography;

const ItemListContainer = (props) => {
  return (
    <Title level={3}>{props.greeting}</Title>
  )
}

export default ItemListContainer