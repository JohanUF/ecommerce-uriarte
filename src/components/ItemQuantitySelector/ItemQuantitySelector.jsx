import React from 'react'
import { InputNumber } from 'antd';

const onChange = (value) => {
    console.log('changed', value);
  };

const ItemQuantitySelector = () => {
  return (
    <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
  )
}

export default ItemQuantitySelector