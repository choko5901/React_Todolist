import React, {useEffect, useState} from "react";

function Edit({selectContent, onModify}) {
        
   
    const [value, setValue]=useState('');



    const onChange = (e) => {
        
       setValue(e.target.value)

       
    };

    useEffect(() =>{
        setValue(selectContent.content);
    },[])

    const onSubmit = (e) => {
       e.preventDefault();

       onModify(selectContent.id, value);

    }

    



    return(
        <div>
            <form onSubmit={onSubmit}>
            <h3>수정할 내용을 작성하세요</h3>
            <input 
                type= "text"
                value={value}
                onChange={onChange}
                />
            <button type="submit">Modify</button>
            </form>
        </div>
    )


}



export default Edit;