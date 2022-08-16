import React from "react";

function InputList({todolist, onDelete, onEdit, onSelect}) {
   return(
    <div>
        {todolist.map((doing) => (
            <div key={doing.id} className= 'List'>
            <div>{doing.content}</div>
            <button className="Delete" onClick={() => {onDelete(doing.id)}} key={doing.id}>Delete</button>
            <button className="Edit" onClick={() => {onEdit(doing.contet); onSelect(doing)}} key={doing.id + "Edit_id"}>Edit</button>
            </div>
        ))}
       
        
        
    </div>
    
   )


}





export default InputList;