import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Typography } from 'antd'
import { CartComponentContext } from './context/cartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
const { Title } = Typography

function App() {
  return (
    <>
      <CartComponentContext>
        <BrowserRouter>
          <Title>
            <Link to={'/'}>PC Componentes</Link>
          </Title>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Nuestros Productos' />}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
          </Routes>
        </BrowserRouter>
      </CartComponentContext>
    </>
  )
}

export default App
