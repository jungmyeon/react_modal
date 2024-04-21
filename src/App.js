import logo from './logo.svg';
import './App.css';
import Modal from "./components/modal-popup/modal"
import { useState} from 'react'
// index 임름은 폴더까지만 import 해도 됨
// state를 만들어서 모달창을 띄우고 지우고 

function App() {
  let [showModal,setShowModal] = useState(false);   // true면 모달뜨고 false 면 안뜸 
  function modalClose()
  {
    // 모달을 얻기 위해서 setShowMOdal(true) 했으니깐
    // 모달을 닫기 위해서 
    // 리엑트에서 화면을 변경하기 위해선 state를 수정한다
    setShowModal(false)
  }

  // 버튼을 누르면 setShowModal을 true로 바꾼다 (showModal을 true로 변경)
  return (
    <div className="App">
      <button onClick = {()=>{
        setShowModal(true)
      }}>모달창 열기</button>
      {
        // showModal이 true일때만 <Modal /> 실행하게끔 코딩
        // && : 앞에꺼가 틀리면, (false, null, Nan) 뒤에거는 어차피 검사안함
        showModal && <Modal id={'modal-1'} onClose={modalClose} _body={<div>모달창 바디</div>} _header={<div><p>Title</p></div>} _footer={<div><h2>Footer</h2> </div>} />
        }
    </div>
  );}

export default App;