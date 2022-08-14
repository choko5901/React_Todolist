import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import InputList from './components/InputList';
import React, {useState, useRef} from 'react';

function App() {
  
 // 초기 및 상태 관리
  const task =[
    {
      id: 1,
      content: "리액트 공부하기"

    },
    {
      id: 2,
      content: "자바 공부하기"

    }
  ];

  const [todos, setTodos]=useState(task);

  const newTask = {
    id: '' ,
    content: ' '
  }

  const [new_todos, setNewTodos]=useState(newTask);
  
  const onChange = (e) => {
    const Ch_N_Task= {
      id: '',
      content: e.target.value
    }  
    
    setNewTodos(Ch_N_Task);
    
}

const nextId = useRef(3);
const Focus = useRef();




//추가
const onAdd= () =>{

  const Add_Task = {
    id:nextId.current,
    content: new_todos.content
  }
  console.log(Add_Task)

  setTodos([...todos, Add_Task]);

  // concat ... ???????????
  // 기존 배열과 세로운 합치는게 concat(야는 무조건 배열) 이고
  // 객체 타입  리액트 에서는 이렇게 사용 가능 객체 타입에는 그 타입에 맞는 새로운 값을 복사해서 
  //  ... 객체를 새로운
  // concat 배열 상태에서 만 

  setNewTodos({
    id:'',
    content: ''

  })
  
  nextId.current +=1;
  
  Focus.current.focus();
      
}
console.log(todos)

//삭제
const onDelete = (a) => {
  
  console.log(a)

  const Delete_List = todos.filter(List => (List.id !== a));
 
  const f_Delete_list =
  
  // const fix = Delete_List.map((acs) =>{
  //   acs.id > a

  // })

  // console.log(fix);


  
 
  
  setTodos(Delete_List);

  nextId.current -=1;
  Focus.current.focus();
}

  return (
    <div>
      <Input onClick={onAdd} onChange={onChange} content={new_todos.content} Focus={Focus}/>
      <InputList todolist={todos} onDelete={onDelete}/>
    </div>
  );
}

export default App;
