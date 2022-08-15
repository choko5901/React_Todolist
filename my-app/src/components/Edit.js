import React, {useState} from "react";

function Edit({todolist}) {
        
    const [EditContent, setEditContent]=useState('');

    function onChange(e) {
        
        setEditContent(e.target.value);
    };





    return(
        <div>
            <h3>수정할 내용을 작성하세요</h3>
            <input onChange={onChange}/>
            <button>Modify</button>
        </div>
    )


}



export default Edit;