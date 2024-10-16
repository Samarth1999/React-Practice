
export function EventBinding(){

    function Database(e){
        console.log(`
           X Position : ${e.clientX} \n
           Button Name: ${e.target.name}
        `);
    }

    return(
        <div className="container-fluid">
            <h2>Event Binding</h2>
            <button name="Insert" onClick={Database}>Insert</button>
            <button name="Update" onClick={Database} >Update</button>
            <button name="Delete" onClick={Database} >Delete</button>
        </div>
    )
}