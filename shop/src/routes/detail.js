import { Nav } from 'react-bootstrap'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

let YellowBtn = styled.button`
    background: ${ props => props.bg };
    color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding: 10px;
`

let Box = styled.div`
    background : gray;
    padding : 20px;
`

function Detail(props){

    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    let [tab, setTab] = useState(0);

    useEffect(() => {
        console.log('ㅇㅑ호');
        let a = setTimeout(() => { setAlert(false) }, 2000);

        return () => {
            clearTimeout(a);
        }
    }, [])


    let [num, setNum] = useState('');
    useEffect(() => {
        if (isNaN(num) == true) {
            console.log('숫자만 써주세요');
        } 
    }, [num]);
    
    let {id} = useParams();
    let findPrd = props.shoes.find(function(x){ 
		return x.id == id 
	})
    return (
        <div className="container">
            {
                alert == true
                ? <div className="alert alert-warning">
                    2초 이내 구매시 할인
                </div>
                : null
            }
            {count}
            <button onClick={() => {setCount(count+1)}}>카운트 버튼</button>
            <Box> 
                <YellowBtn bg="blue"></YellowBtn>
            </Box>
            <input onChange={ (e) => setNum(e.target.value) }></input>
            <div className="row">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes' + (id) + '.jpg'} width="100%" />
                </div>
                <h4 className="pt-5">{findPrd.title}</h4>
                <p>{findPrd.content}</p>
                <p>{findPrd.price}0원</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>

            <Nav variant="tabs" defaultActionKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => { setTab(0) }}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => { setTab(1) }}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => { setTab(2) }}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}/>
        </div> 
    )
}  
function TabContent({tab}) {
    
    let [fade, setFade] = useState('');
    useEffect(() => {
        fade = end;
    }, [tab])

    return (
        <div className={"start" + fade}>
            { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
        </div>
    )
}

export default Detail;