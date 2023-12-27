import { Navbar, Container, Nav } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainBg from './bg.jpeg'
import { useState } from 'react';
import data from './data'; // ./data.js
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './detail';

function App() {
  let [shoes] = useState(data);
  let [navigate] = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Link to="/">홈으로 이동하기</Link>
            <Link onClick={()=>{ navigate('/detail') }}>상세페이지로 이동하기</Link>
            <Route path="*" element={ <div>없는페이지임</div> } />
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg" style={{ background: 'url(' + mainBg + ')no-repeat center/cover' }}></div>
            <div className="container">
              <div className="row">
                {
                  shoes.map((a, i) => {
                    return (
                      <Card shoes={shoes[i]} i={i} /> // i={i+1} 
                    )
                  })
                }
              </div>
            </div>
          </>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
      </Routes>  


    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}원</p>
    </div>
  )
}

export default App;
