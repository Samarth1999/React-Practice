import { useState } from "react";

export function DataBinding2()
{
   
    const [userName, setUserName] = useState('John');

    function handleNameChange(e){
        setUserName(e.target.value);
    }

    return(
        <>
          <h2>Edit</h2>
           User Name : <input type="text" value={userName}  onChange={handleNameChange} />
           <p>Hello ! {userName}</p>
        </>
    )
}