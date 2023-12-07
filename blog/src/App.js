/*eslint-disable*/

import React from "react";
import { useState } from "react";
import "./index.css";

export default function App() {
  let [title, setTitle] = useState(["1번 제목", "2번 제목", "3번 제목"]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [moTit, setMoTit] = useState(0);
  let [val, setVal] = useState("");

  //오늘 날짜
  const [toDay] = useState(new Date());
  const [month] = useState(("0" + (toDay.getMonth() + 1)).slice(-2));
  const [date] = useState(("0" + toDay.getDate()).slice(-2));
  const [thisTime] = useState(month + date);

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ fontWeight: 700 }}>개발 blog</div>
      </div>
      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(true);
                setMoTit(i);
              }}
            >
              {title[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              >
                👍🏻 {like[i]}
              </span>
            </h4>
            <p>{thisTime}</p>
            <button
              onClick={() => {
                let copy3 = [...title];
                copy3.splice(i, 1); // 1 은 무조건 작성 ..
                setTitle(copy3);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      {modal == true ? (
        <Modal color="#ededed" tit={title} motit={moTit} />
      ) : null}

      <input
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy2 = [...title, val];
          let copy4 = [...like, 0];
          // 복사 한 title state 에 val(인풋에 입력된 값) 추가하기 === copy2.unshift(val)
          if (val == 0) {
            alert("값을 입력하세요");
          } else {
            setTitle(copy2);
            setLike(copy4);
          }
        }}
      >
        글 발행하기
      </button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.tit[props.motit]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}