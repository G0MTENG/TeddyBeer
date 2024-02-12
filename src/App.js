import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Cards from "./Cards";
import Detail from "./Detail";
import { useState } from "react";
import data from "./data";
import beer1 from "./img/beer1.png";
import beer2 from "./img/beer2.png";
import beer3 from "./img/beer3.png";

function App() {
  const [beers, setBeers] = useState(data);
  const beerImgs = [beer1, beer2, beer3];

  const handleSortBtn = () => {
    let copyBeers = [...beers];
    copyBeers = copyBeers.sort((a, b) => (a.title < b.title ? -1 : 1));
    setBeers(copyBeers);
  };

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className="Navbar">
        <Container>
          <Navbar.Brand href="#home">Teddy Beer</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="welcome">Welcome to Teddy Beer</div>

      <Routes>
        <Route
          path="/"
          element={
            <Cards
              beers={beers}
              beerImgs={beerImgs}
              handleClick={handleSortBtn}
            />
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={<Detail product={beers} beerImg={beerImgs} />}
        />
        <Route path="/event" element={<About />}>
          <Route
            path="one"
            element={<div>첫 주문 시 양배추즙 서비스</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 구폰받기</div>}></Route>
        </Route>
        <Route path="*" element={<h1>없는 페이지다</h1>} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  );
}

export default App;
