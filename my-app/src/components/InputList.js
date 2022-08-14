import React from "react";

function InputList({todolist, onDelete}) {
   return(
    <div>
        {todolist.map((doing) => (
            <div key={doing.id} className= 'List'>
            <div>{doing.content}</div>
            <button className="Delete" onClick={() => {onDelete(doing.id)}} key={doing.id}>Delete</button>
            <button className="Modify">Modify</button>
            </div>
        ))}
       
        
        
    </div>
    
   )


}





export default InputList;