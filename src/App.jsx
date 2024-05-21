import NavBar from './components/NavBar/NavBar'
import { Typography } from 'antd';
const { Title } = Typography;

function App() {
  return (
    <>
      <Title level={2}>PC Componentes</Title>
      <NavBar/>
    </>
  )
}

export default App
