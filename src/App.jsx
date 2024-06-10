import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Typography } from 'antd'
const { Title } = Typography

function App() {
  return (
    <>
      <BrowserRouter>
        <Title>
          <Link to={'/'}>PC Componentes</Link>
        </Title>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Nuestros Productos' />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
