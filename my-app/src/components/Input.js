import React from 'react';

function Input ({onChange, onClick, content, Focus}) {
return(
<div className='Container'>
    <div><p className='Title'> Todolist</p></div>
    <div>
        <input
            name='list'
            placeholder='Write your task'
            onChange={onChange}
            value = {content}
            ref={Focus}
        />
        <button onClick={onClick} >+</button>
    </div> 
</div>
)


}



export default Input;