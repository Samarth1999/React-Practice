// fakestoreapi.com

// Request Method        Route                        Description
// -----------------------------------------------------------------------------------------------------
// GET                 /products                            It returns an array of                                                         products. [ ]

// GET                /products/1                        It returns specific product
//                                                 that matches given id. { }

// GET                /products/categories                It returns all categories. [ ]


// GET                /products/category/electronics        It returns an array of all
//                                                 products belong to specific
//                                                 category.

// API Data in Fakestore:

//     {
//       id:number,
//       title:string,
//       image:string,
//       price:number,
//       category:string,
//       description:string,
//       rating: {rate:number, count:number}
//     }

// FAQ: How you can know about the keys in any unknown object?
// Ans:  
//     a) Object.keys()  => returns the array of all keys in object
       
//         Syntax:        []
//               Object.keys(objectName).map(function(key){
//                     typeof  objectName[key]
//               })
   
//     b) for..in iterator

//         Syntax:
//                for(var property in object)
//                {
//                }

// Note: You can use Web Debuggers to test and explore API requests.
//             a) postman
//             b) fiddler
//             c) swagger etc..

// Ex:
{/* <script>
    fetch("http://fakestoreapi.com/products/1&quot;)
    .then(res=> res.json())
    .then(product => {
        Object.keys(product).map(key=>{
             document.write(`${key} : ${typeof product[key]}<br>`);
             
        })
        Object.keys(product.rating).map(key=> {
                document.write(key + "<br>");
             })
    })
</script> */}
