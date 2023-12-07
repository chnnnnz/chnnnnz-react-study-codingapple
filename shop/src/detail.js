import { useParams } from "react-router-dom";

function Detail(props){
    let {id} = useParams();
    let findPrd = props.shoes.find(function(x){ 
		return x.id == id 
	})
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <img src={'https://codingapple1.github.io/shop/shoes' + (id) + '.jpg'} width="100%" />
            </div>
                <h4 className="pt-5">{findPrd.title}</h4>
                <p>{findPrd.content}</p>
                <p>{findPrd.price}0원</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
        </div> 
    )
}  

export default Detail;