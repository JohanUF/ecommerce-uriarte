import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Typography } from 'antd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const { Title } = Typography;

function App() {
  return (
    <>
      <BrowserRouter>
        <Title level={1}>PC Componentes</Title>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Nuestros Productos'/>}></Route>
          <Route path='/sales' element={<h1>Sales</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
