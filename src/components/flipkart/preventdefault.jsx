// Prevent Default
// - HTML form provides generic buttons
//     a) submit
//     b) reset

//     <button type="submit">        => It can submit form data to server
//     <button type="reset">        => It can reset the form data
//     <button>                    => default is submit

// - HTML form have non-generic button
//     a) button

//     <button type="button">        => without any pre-defined functionality.

// - Generic elements have pre-defined functionality, which firesup after the custom functions that you defined for element.

// - You can prevent the default functionality of any element by using the method
//         "preventDefault()"

// Syntax:
//     function handleSubmitClick(e)
//     {
//         e.preventDefault();
//     }

// Ex:
// import { useState } from "react";

export function PreventDefault(){

    function handleSubmitClick(e){
        alert("Form will submit its data to Server - API");
        e.preventDefault();
    }

    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <form onSubmit={handleSubmitClick}>
               User Name <input type="text" name="UserName" /> <button type="submit">Submit</button>
            </form>
        </div>
    )
}