import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Tekst1, Tekst2, Tekst3, Tekst4, CatCard, CategoryList } from './components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import './App.css';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function App() {

  const [breeds, setBreeds] = useState(null);
  const [categories, setCategories] = useState(null);
  const [joke, setJoke] = useState("");
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {

      if (searchTerm.length > 2 ) {
        fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
        .then( response => {
          return response.json();
        })
        .then(data => {
          const newIndex = Math.floor(Math.random() * data.result.length)
          const newJoke = data.result[newIndex]?.value;
          if (newJoke !== undefined) {
            setJoke(data.result[newIndex]?.value);
          } else {
            setJoke('Nema šale');
          }
        })
      }
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  function fetchBreeds () { 
    fetch("https://catfact.ninja/breeds")
    .then(res => {
      return res.json();
    })
    .then(data => {
      setBreeds(data.data);
  })}

  function fetchCategories () {
    fetch("https://api.chucknorris.io/jokes/categories")
  .then( response => {
    return response.json();
  })
  .then(data => {
    setCategories(data);
  })}

  function fetchJoke () {
    fetch("https://api.chucknorris.io/jokes/random")
    .then( response => {
      return response.json();
    })
    .then(data => {
      setJoke(data.value);
  })}

  useEffect(() => {

    fetchCategories();
    fetchBreeds();
    fetchJoke();
  }, []);

  const handleSelect = (e) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${e.target.value}`)
    .then( response => {
      return response.json();
    })
    .then(data => {
      setJoke(data.value);
    })
  }

  const createCard = breeds && breeds.map((ele) => {
    return (
      <CatCard breed={ele} key={ele.breed}/>
    )
  })

  const createCategoryList = categories && categories.map((ele) => {
    return (
      <CategoryList category={ele} key={ele}/>
    )
  })

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
        <Row xs={1} sm={2} md={4} lg={6} className="g-6">
          {createCard}
        </Row>
        <Row xs={1} md={2} className="g-4">
          <Card style={{minHeight:"150px"}}>
            <Card.Body>
              <Form.Select onChange={handleSelect}>
                <option>Open this select menu</option>
                {createCategoryList}
              </Form.Select>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>{joke && joke}</Card.Body>
          </Card>
        </Row>
        <Form.Label htmlFor="searchInput">Search for jokes</Form.Label>
        <Form.Control id="searchInput" type="text" placeholder="Joke search.." onChange={(e) => setSearchTerm(e.target.value)}/>

      </main>
    </BrowserRouter>
    </>
  );
}

export default App;
