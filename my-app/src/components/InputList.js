import React from "react";

function InputList({todolist}) {
   return(
    <div>
        {todolist.map((content) => (
            <div>{content.content}</div>
        ))} 
        
        
    </div>
    
   )


}





export default InputList;