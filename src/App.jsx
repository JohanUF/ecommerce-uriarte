import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Typography } from 'antd';
const { Title } = Typography;

function App() {
  return (
    <>
      <Title level={1}>PC Componentes</Title>
      <NavBar/>
      <ItemListContainer 
        greeting='Nuestros Productos'
      />
    </>
  )
}

export default App
