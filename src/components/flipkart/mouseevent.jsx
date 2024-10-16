// 1. Synthetic Mouse Events

//     onMouseOver
//     onMouseOut
//     onMouseUp
//     onMouseDown
//     onMouseMove

// Ex:
// mouse-event.css

// nav img {
//     border:none;
// }
// nav img:hover {
//     border:2px solid blue;
// }
// main img:hover {
//     transform: scale(1.5);
//     transition: 2s;
// }
// main img {
//     transform: scale(1);
//     transition: 2s;
// }

// mouse-event.jsx

import { useState } from "react";
import './mouse-event.css';

export function MouseEvent(){

    const [images] = useState(["m1.jpg", "m2.jpg", "m3.jpg", "m4.jpg"]);
    const [preview, setPreview] = useState('m1.jpg');

    function handleMouseOver(e){
        setPreview(e.target.src);
    }

    return(
        <div className="container-fluid">
            <section className="mt-4 row">
                <nav className="col-2">
                   {
                     images.map(imagePath=>
                        <div className="mb-4 p-2" style={{width:'120px'}}>
                            <img style={{cursor:'grab'}} onMouseOver={handleMouseOver} src={imagePath} width="100" height="100" />
                        </div>
                        )
                   }
                </nav>
                <main className="col-10">
                   <div style={{height:'400px', width:'400px', overflow:'hidden'}}>
                    <img src={preview} width="400" height="400" />
                   </div>
                </main>
            </section>
        </div>
    )
}

// Ex: Mouse Move

// mouse-move.jsx

// import { useState } from "react"


// export function MouseMove(){


//     const [styleObject, setStyleObject] = useState({position:'', top:'', left:''});

//     function handleMousemove(e){
//         setStyleObject({
//             position: 'fixed',
//             top: e.clientY + 'px',
//             left: e.clientX + 'px'
//         })
//     }

//      return(
//         <div onMouseMove={handleMousemove}>
//             <div style={{height:'1000px'}}>
//             <h1>Mouse mouse pointer to test</h1>
//             </div>
//             <img src="flag.gif" style={styleObject}  width="50" height="50"/>
//         </div>
//      )
// }
