// 2. Synthetic Keyboard Events

//     onKeyUp
//     onKeyDown                        JOHN
//     onKeyPress

//     KeyEvent Properties
//     - keyCode
//     - charCode
//     - which
//     - shiftKey
//     - ctrlKey
//     - altKey    
                   
// Ex:
import { useState } from "react"

export function KeyBoardEvent(){

    const [users] = useState([{UserId:'john'}, {UserId:'john12'}, {UserId:'john_nit'}]);
    const [userError, setUserError] = useState('');
    const [isUserValid, setIsUserValid] = useState(false);
    const [capsWarning, setCapsWarning] = useState({display:'none'});

    function VerifyUserId(e){
        for(var user of users){
            if(user.UserId===e.target.value){
                setUserError('User Id Taken - Try Another');
                setIsUserValid(false);
                break;
            } else {
                setUserError('User Id Available');
                setIsUserValid(true);
            }
        }
    }


    function VerifyCaps(e){
        if(e.which>=65 && e.which<=90){
            setCapsWarning({display: 'block'});
        } else {
            setCapsWarning({display:'none'});
        }
    }

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>UserId</dt>
                <dd><input type="text" onKeyUp={VerifyUserId} /></dd>
                <dd className={(isUserValid)?'text-success':'text-danger'}>{userError}</dd>
                <dt>Password</dt>
                <dd>
                    <input type="password" onKeyPress={VerifyCaps} />
                </dd>
                <dd className="text-warning" style={capsWarning}>
                    <div className="bi bi-exclamation-triangle"> Warning - CAPS ON</div>
                </dd>
            </dl>
        </div>
    )
}

// Task: For Password Display Password strength  strong, weak, poor.
     
// Condition:

//   If password is 4 to 15 chars alpha numeric with atleast one uppercase letter : strong
//   If password is 4 to 15 chars alpha numeric without uppercase letter : weak
//   if password is < 4 chars : poor

//   You can show strength using <meter>

//    Write Regular Expression :   4 to 15 chars with atleat 1 uppercase letter
//    value.match()  string function.

//     if(value.match(regExp)) {

//       }