// Summary
// - XMLHttpRequest
// - fetch() promise
// - jQuery Ajax

//                             Axios
// - It is a 3rd party library that provides a middleware to communicate with end point.
// - It supports CORS.
// - It provides better error handling.
// - It can handle multiple requests simultaneously at the same time.
// - It is more secured.
// - It is modular and async as it used promises.

// 1. Install axios

//     > npm  install  axios  --save

// 2. Import axios base library into component

//     import  axios  from  "axios";

// 3. Configure axios request

//     axios(
//         {
//           method: "",
//           url: "",
//           data:" "
//         }
//         )
   
//         (or)

//     axios.get("url").then().catch().finally()

//          (or)

//     axios([{ method:"", url:"" }, { method:"", url:""}])

// Note: The axios request on success will returns a response object that comprises of
//       various details like

//             a) data            :  The data returned from end-point as response
//             b) statusText        :   Returns the status text            
//             c) status            :   Returns the status code

//       Status Codes:
//             2xx            :  success, ok
//             3xx            :  methods, redirections
//             4xx            :  client errors
//             5xx            :  server errors

// Ex:
// flipkart.jsx

import { useEffect, useState } from "react";
import axios from "axios";

export function AxiosExample(){

    const [products, setProducts] = useState([{title:'', price:0, rating:{rate:0, count:0, reviews:0}, image:'', features:[]}]);
   
    useEffect(()=>{
         axios.get("products.json")
         .then((response)=>{
             setProducts(response.data);
         })
         .catch((reason)=>{
            console.log(reason.message);
         })
    },[]);

    return(
        <div className="container-fluid">
            {
                products.map(product=>
                    <div key={product.title} className="row mt-3 mb-3 p-2 border border-2 border-dark">
                        <div className="col-2">
                            <img src={product.image} width="100%" />
                        </div>
                        <div className="col-8">
                            <div className="h5 text-primary">{product.title}</div>
                            <div>
                                <span className="badge bg-success text-white">{product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                                 <b className="text-secondary ms-3">{product.rating.count} Ratings & {product.rating.reviews} Reviews</b>
                            </div>
                            <div className="mt-2">
                               <ul className="list-unstyled">
                                  {
                                    product.features.map(feature=>
                                        <li key={feature} className="mb-2"> <span className="bi bi-tag-fill text-success"></span> <span> {feature} </span> </li>
                                        )
                                  }
                               </ul>
                            </div>
                        </div>
                        <div className="col-2">
                                <div className="h3"> {product.price.toLocaleString('en-in',{style: 'currency', currency:'INR'})} </div>
                        </div>
                    </div>
                    )
            }
        </div>
    )
}
