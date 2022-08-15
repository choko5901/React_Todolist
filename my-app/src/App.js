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

//삭제
const onDelete = (a) => {

  const Delete_List = todos.filter(List => (List.id !== a));
  
    Delete_List.map(F_id => 
      {if(F_id.id > a){
      F_id.id = F_id.id -1}
      })
// ㄹㅇ id값  수정 개 ㅈ같았따
// map 개념을 잘생각해 이거 자체가 기존의 배열 속 요소를 하나씩 꺼내 
// 요소의 프로 퍼티를 핸들링 가능하게끔 해주고 
// 핸들링 후 새로운 배열로 그대로 Delete_List로 만들어 준거임
// 여기서 문득 기억이 if 문이나 JS 문법을 쓰려면 {}를 써야 한다 라고 들었던거 같기도 저 중괄호
// 쓰는 이유 좀 질문 해보자

  // console.log(Delete_List);

  
  setTodos(Delete_List);

  nextId.current -=1; // 다음 추가 시 이전 ID 값 부터 다시 수행하기 위해 하나 줄었으니
  Focus.current.focus();
}
// 수정





console.log(todos)

  return (
    <div>
      <Input onClick={onAdd} onChange={onChange} content={new_todos.content} Focus={Focus}/>
      <InputList todolist={todos} onDelete={onDelete}/>
    </div>
  );
}

export default App;
