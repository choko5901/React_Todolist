import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import InputList from './components/InputList';
import React, {useState, useRef} from 'react';

function App() {
  
 
  const [todos, setInputtodos]=useState([
    {
      id: 1,
      content: "리액트 공부하기"

    },
    {
      id: 2,
      content: "자바 공부하기"

    }
  ]);



  const nextId = useRef(3);
  


 function onChange() {
  // console.log(e.target.value)
}
 function onAdd() {
//  const newtodos ={
//   id:  nextId
//  }
}

// function onAdd() {
//   const addList ={id: nextId,
//     content: newList
//   }
//   console.log(Inputtodos.concat(addList))
// }

  return (
    <div>
      <Input onChange={onChange} onClick={onAdd}/>
      <InputList todolist={todos}/>
    </div>
  );
}

export default App;
