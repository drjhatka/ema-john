import './App.css'
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';
import Shop from './components/Shop/Shop';

function App() {
  return (
      <Container fluid className='App'>
        <Header></Header>
        <Shop></Shop>
      </Container>
    
  )
}

export default App
