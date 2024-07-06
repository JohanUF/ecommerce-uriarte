import React from 'react'
import { Descriptions } from 'antd'

const Description = ({item}) => {

  return (
    <Descriptions title="Detalle de producto" bordered items={item}/>
  )
}

export default Description