import './App.css'
import Header from './components/Header/Header';
import { Row, Col, Container } from 'react-bootstrap';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Container fluid className='App'>
      <Row>
        <Header></Header>
      </Row>

      <Row>
          <Shop></Shop>
          <Col xs={2} md={3} lg={3}>
            <Cart></Cart>
        </Col>
      </Row>

    </Container>

  )
}

export default App
