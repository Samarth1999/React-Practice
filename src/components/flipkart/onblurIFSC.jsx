import { useState } from "react"

export function OnBlur(){

    const [codeError, setCodeError] = useState('');

    function VerifyCode(e){
        if(e.target.value=="") {
            setCodeError("IFSC Code is required");
        } else {
            setCodeError("");
        }
    }
 
    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <dl className="w-25">
                <dt>IFSC Code</dt>
                <dd><input type="text" onBlur={VerifyCode} className="form-control" placeholder="Block Letters"/></dd>
                <dd className="text-danger">{codeError}</dd>
            </dl>
        </div>
    )
}