// 5. Clipboard Events
//         onCut
//         onCopy
//         onPaste

// Ex:
import { useEffect } from "react";
import { useState } from "react"

export function ClipboardEvent(){

    const [msg, setMsg] = useState('');
    const [count,setCount] = useState(0);

    function OpenImage(){
        window.open("m1.jpg","Mobile","width=300 height=400");
    }
    
    useEffect(()=> {
       document.onpaste = function(){
         return false;
       }
    },[]);
 
    return(
        <div className="container-fluid">
            <h2>Button Events</h2>
            <img src="m1.jpg" onDoubleClick={OpenImage} width="100" height="100" />
            <p>Double Click to View large</p>  
            <h2>Our Terms and Conditions</h2>          
            <textarea onCut={()=> { setMsg('Removed and Copied to Clipboard'); }} onCopy={()=>{setMsg('Copied to Clipboard')}} onPaste={()=>{setCount(count+1);setMsg(`${count} Times Tried Paste to Clipboard`);}}  rows="4" cols="40">Read our terms of service.</textarea>
            <p>{msg}</p>
        </div>
    )
}
