import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Tekst1, Tekst2, Tekst3, Tekst4 } from './components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';

function App() {
  return (
    <>
    
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href="prva">Prva stranica</Nav.Link>
              <Nav.Link href="druga">Druga stranica</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="druga">Druga</NavDropdown.Item>
                <NavDropdown.Item href="prva">Prva</NavDropdown.Item>
                <NavDropdown.Item href="peta">Treća</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      <BrowserRouter>
      <main>
      <h1>Routing zadaca</h1> 
      
        <Routes>
          <Route path='/' element={<Tekst4/>}></Route>
          <Route path='prva' element={<Tekst1/>}></Route>
          <Route path='druga' element={<Tekst2/>}></Route>
          <Route path='*' element={<Tekst3/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
    </>

  );
}

export default App;
