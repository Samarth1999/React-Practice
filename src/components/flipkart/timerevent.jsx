// Summary
// - Mouse
// - Keyboard
// - Clipboard
// - Button
// - Touch

//                             Timer Events
// - JavaScript date and time values are configured using Date().

//     const [now] = useState(new Date());        // loads current date & time
//     const [dept] = useState(new Date("yy-mm-dd hr:min:sec.millisec");

// - To read date and time values you can use the functions

//         getHours()                0-23
//         getMinutes()                0-59
//         getSeconds()                0-59
//         getMilliSeconds()            0-99
//         getDate()                    1, 28, 29, 30, 31
//         getDay()                    0 = Sunday
//         getMonth()                0 = January
//         getFullYear()                2023
//         toLocaleDateString()
//         toLocaleTimeString()

// - To set date and time values
//         setHours()
//         setMinutes()
//         setSeconds()
//         setMilliSeconds()
//         setDate()
//         setMonth()
//         setYear()

// - React can use JavaScript timer events

//     a) setTimeout()
//     b) clearTimeout()
//     c) setInterval()
//     d) clearInterval()

// setTimeout():
// - It is used to control debouncing in application.
// - Debouncing is a technique where a task can be locked in the memory and keep inactive [sleep] for specific duration and then later release into process.
// - Task is removed from memory and released into process. Hence task execute only once.

// Syntax:
//      setTimeout(function(){ }, timeInterval)

// clearTimeout():
// - It can remove the task from memory.
// - You can remove before it is released into process.

// Syntax:
//      clearTimeout(referenceName)

// setInterval():
// - It is a timer event that loads the given task into memory and release into process a regular time intervals.
// - It is not removed from memory, a copy of function is released into process. Hence it executes repeatedly until removed from memory.

// Syntax:
//     setInterval(function(){ }, interval)


// clearInterval():
// - It removes the task from memory.

// Syntax:
//     clearInterval(referenceName)


// Ex: Interval

// timer-demo.jsx

// import { useEffect, useState } from "react"

// export function TimerDemo(){


//     const [now] = useState(new Date());
//     const [status, setStatus] = useState('');
//     const [time, setTime] = useState('');

//     function GetSalutation(){
//         var date = new Date();
//         var hrs = date.getHours();
//         if(hrs>=0 && hrs<=12) {
//             setStatus("Good Morning !");
//         } else if (hrs>12 && hrs<=16) {
//             setStatus("Good Afternoon !");
//         } else if (hrs>16 && hrs<=23) {
//             setStatus("Good Evening !!!");
//         }
//     }
//     function Clock(){
//         var now = new Date();
//         var time = now.toLocaleTimeString();
//         setTime(time);
//     }

//     useEffect(()=> {
//         GetSalutation();
//         setInterval(Clock, 1000);
//     },[]);

//     return(
//         <div className="container-fluid">
//             <header className="bg-dark text-white p-2 d-flex justify-content-between">
//                 <div>
//                     <span>Shopper.</span>
//                 </div>
//                 <div>
//                     <span>{status}</span>
//                 </div>
//                 <div>
//                     <span className="bi bi-calendar"> {now.toDateString()} </span>
//                     <span className="bi bi-clock"> {time} </span>
//                 </div>
//             </header>
//         </div>
//     )
// }


// Ex: Timeout

import { useState } from "react"

export function TimeoutDemo()
{
    const [msg, setMsg] = useState('');

    function msg1(){
        setMsg('Volume Set : 1');
    }
    function msg2(){
        setMsg('Volume Set : 2');
    }
    function msg3(){
        setMsg('Volume Set : 3');
    }
    function msg4(){
        setMsg('Volume Set : 4');
    }
    function IncreaseVolume(){
       setTimeout(msg1, 2000);
       setTimeout(msg2, 4000);
       setTimeout(msg3, 6000);
       setTimeout(msg4, 8000);
    }

    return(
        <div className="container-fluid">
            <div className="mt-4">
                <button  onClick={IncreaseVolume} className="btn btn-primary me-2"> + </button>
            </div>
            <h3>{msg}</h3>
        </div>
    )
}