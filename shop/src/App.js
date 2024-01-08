import { Navbar, Container, Nav } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainBg from './bg.jpeg'
import { useState } from 'react';
import data from './data'; // ./data.js
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/detail';
import axios from 'axios'
import Cart from './Cart';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [clickCount, setClickCount] = useState(0);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link to="/">홈으로 이동하기</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>상세페이지로 이동하기</Nav.Link>
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
                      <Card shoes={shoes[i]} i={i} key={a.id} /> // i={i+1} 
                    )
                  })
                }
              </div>
            </div>
            <button onClick={() => {
              setClickCount(clickCount +1);
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((res) => {
                let copy = [...shoes, ...res.data];
                setShoes(copy);
              })
              .catch(() => {console.log('실패')})

              axios.post('')
            }}>더보기</button>
          </>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
        <Route path="/cart" element={ <Cart/> } /> 
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
