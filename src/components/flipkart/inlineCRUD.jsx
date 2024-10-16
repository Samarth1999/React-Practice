
// - Rest Parameters        ...param
// - Spread Operator        ...[ ]

// Note: You can use the spread operator to read values upto end from a collection.
//       You can concat new values into collection by using destructuring technique

// Ex:
// <script>
//     var one = ["A", "B"];
//     var two = "C";
//     var three = "D";
//     var collection = [...one, two, three];
//     console.log(collection);            => [ "A", "B", "C", "D"]
// </script>

// - You can use "map()" with index to identify the index of given value in an iterator.
// - You can remove any item at specified index by using splice().

//             product.map((product, index)=>
//                 <li  key={index}> {product.Name} </li>
//             )

// Ex:
import { useEffect, useState } from "react"


export function InmemoryCRUD()
{
    const [products, setProducts] = useState([{Id:1, Name: 'TV'}, {Id:2, Name: 'Mobile'}]);
    const [newProduct, setNewProduct] = useState({Id:0, Name: ''});
   
    function handleIdChange(e){
        setNewProduct({
            Id: parseInt(e.target.value),
            Name: newProduct.Name
        })
    }
    function handleNameChange(e){
        setNewProduct({
            Id: newProduct.Id,
            Name: e.target.value
        })
    }

    function handleAddClick(){
        setProducts([...products, newProduct]);
        setNewProduct({
            Id:'',
            Name:''
        })
        alert(`Product Successfully Added..`);
    }

    function handleDeleteClick(id){
            var flag = window.confirm("Sure");
            if(flag==true) {
                products.splice(id,1);
            setProducts([...products]);
            alert('Record Deleted');
            }
           
    }

    return(
        <div className="container-fluid">
            <h2>Testing CRUD</h2>
            <div>
                <label className="fw-bold">Add New Product</label>
                <div>
                    <dl>
                        <dt>Product Id</dt>
                        <dd><input type="number" value={newProduct.Id} onChange={handleIdChange} /></dd>
                        <dt>Name</dt>
                        <dd><input type="text" value={newProduct.Name} onChange={handleNameChange} /></dd>
                    </dl>
                    <button onClick={handleAddClick}>Add Product</button>
                </div>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index)=>
                            <tr key={index}>
                              <td>{product.Name}</td>
                              <td>
                                <button className="bi bi-pen-fill me-2 btn btn-warning"></button>
                                <button onClick={ ()=> { handleDeleteClick(index) }} className="bi bi-trash btn btn-danger"></button>
                              </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}
