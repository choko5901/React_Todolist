import React from 'react';

function Input ({onChange, onClick}) {
return(
<div className='Container'>
    <div><p className='Title'> Todolist</p></div>
   
    <input
    name='list'
    placeholder='write your task'
    onChange={onChange}/>
    <button onClick={onClick} >+</button>
    
</div>
)


}



export default Input;