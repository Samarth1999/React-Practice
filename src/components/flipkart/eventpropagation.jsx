// Event Propagation
// - It is a mechanism followed for events configured for element with parent and child hierarchy.
// - The child element event triggers and continue the propagation to its parent.
// - This leads to the execution of all events configured for child and parent level hierarchy.
// - You can use "stopPropagation()" of event to prevent execution of parent events automatically.

// Syntax:
//     function handleButtonClick(e)
//     {
//       e.stopPropagation();
//     }

// Ex:
// event-binding.jsx

import { useState } from "react";

export function EventPropogation(){

    function handleNavClick(){
        alert("Navbar Clicked");
    }
    function handleHomeClick(e){
        alert("Home Button Clicked");
        e.stopPropagation();
    }

    return(
        <div className="container-fluid">
            <nav onClick={handleNavClick} className="bg-dark text-white m-4 p-4">
                <h3>Navbar</h3>
                <button onClick={handleHomeClick} className="btn btn-light">Home</button>
            </nav>
        </div>
    )
}

