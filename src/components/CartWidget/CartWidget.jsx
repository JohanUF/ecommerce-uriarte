import { useContext } from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useContext(CartContext)

  return (
    <>
      <Link to={'/cart'}>
        <Button>
          <ShoppingCartOutlined />
          Carrito ({ cart ? cart.length : 0 })
        </Button>
      </Link>
    </>
  )
}

export default CartWidget