// XMLHttpRequest

// - It is a JavaScript object used to commnuicate with a end point.
// - XMLHttpRequest object provides various properties and methods to handle communication
   
//         Syntax:
//                 var http = new XMLHttpRequest();

//     Member                Description
//     --------------------------------------------------------------------------------------------
//     open()            It is used to configure the request.
//                     It comprises
//                     a) Request type [GET, POST..]
//                     b) Request end point location [source]
//                     c) Boolean Async [true, false]
   
//                     Syntax:
//                     http.open("GET", "URL", true);

//     send()            It sends the request to end point.
//                     It will process the configured request.

//                     Syntax:
//                     http.send();

       
//     onreadystatechange    It is a function of AJAX life cycle in JavaScript, that
//                         defines actions to perform when response is ready.

//                         It depends on  "readystate" status, which includes

//                         0    : Initial
//                         1    : Pending
//                         2    : Processing    
//                         3    : Completed
//                         4    : Ready [Response Ready]


//     responseText            It returns string response

//     responseXML            It returns XML response

//     responseHTML        It returns markup response


// Ex:
// 1. Public folder => products.json


// [
//     {
//         "title": "APPLE iPhone 14 (Blue, 128 GB)",
//         "price": 60999,
//         "rating": {"rate":4.6, "count": 3500, "reviews": 600},
//         "image": "iblue.jpg",
//         "features": [
//             "Bank Offer10% off on Axis Bank Credit Card EMI Transactions, up to ₹1,000 on orders of ₹5,000 and aboveT&C",
//             "Bank Offer10% off on Flipkart Axis Bank Credit Card EMI Transactions, up to ₹1000 on orders of ₹5000 and aboveT&C",
//             "Bank Offer10% off on Citi Credit Card EMI Transactions, up to ₹1,000 on orders of ₹5,000 and aboveT&C",
//             "Special PriceGet extra ₹8901 off (price inclusive of cashback/coupon)T&C"
//         ]
//     },
//     {
//         "title": "APPLE iPhone 14 (Starlight, 128 GB)",
//         "price": 60999,
//         "rating": {"rate":4.5, "count": 1500, "reviews": 30},
//         "image": "starlight.jpg",
//         "features": [
//             "Bank Offer10% off on Axis Bank Credit Card EMI Transactions, up to ₹1,000 on orders of ₹5,000 and aboveT&C",
//             "Bank Offer10% off on Flipkart Axis Bank Credit Card EMI Transactions, up to ₹1000 on orders of ₹5000 and aboveT&C",
//             "Bank Offer10% off on Citi Credit Card EMI Transactions, up to ₹1,000 on orders of ₹5,000 and aboveT&C",
//             "Special PriceGet extra ₹8901 off (price inclusive of cashback/coupon)T&C"
//         ]
//     },
//     {
//         "title": "APPLE iPhone 14 (Red, 128 GB)",
//         "price": 60999,
//         "rating": {"rate":4.5, "count": 7500, "reviews": 2430},
//         "image": "m2.jpg",
//         "features": [
//             "Bank Offer10% off on Axis Bank Credit Card EMI Transactions, up to ₹1,000 on orders of ₹5,000 and aboveT&C",
//             "Bank Offer10% off on Flipkart Axis Bank Credit Card EMI Transactions, up to ₹1000 on orders of ₹5000 and aboveT&C",
//             "Bank Offer10% off on Citi Credit Card EMI Transactions, up to ₹1,000 on orders of ₹5,000 and aboveT&C",
//             "Special PriceGet extra ₹8901 off (price inclusive of cashback/coupon)T&C"
//         ]
//     }
// ]

// 2. Component

// flipkart.jsx

import { useEffect, useState } from "react"

export function XMLHttpRequestExample(){

    const [products, setProducts] = useState([{title:'', price:0, rating:{rate:0, count:0, reviews:0}, image:'', features:[]}]);
   
    useEffect(()=>{

        var http = new XMLHttpRequest();
        http.open("GET", "products.json", true);
        http.send();

        http.onreadystatechange = function(){
             if(http.readyState==4) {
                 setProducts(JSON.parse(http.responseText));
             }
        }

    },[]);

    return(
        <div className="container-fluid">
            {
                products.map(product=>
                    <div className="row mt-3 mb-3 p-2 border border-2 border-dark">
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
                                        <li className="mb-2"> <span className="bi bi-tag-fill text-success"></span> <span> {feature} </span> </li>
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


// Issues with XMLHttpRequest Object:
// - It is a request to end point which requires explicit Async configuration.
// - The response is not directly in JSON format if end point is sending JSON.
// - It requires explicit parsing methods [JSON.parse()].
// - It is poor in error handling.
// - It can't track the client and server side errors implicitly.

