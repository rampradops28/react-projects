import React, { useEffect, useState } from 'react'
import { items } from '../dataset'
import '../CartPro/Cart.css'


const Cart = ({products,setProducts}) => {
  
    const [totalProducts , setTotalProduct] = useState(products.length);
    
    useEffect(() => {
        setTotalProduct(products.length);
    },[products]);


    const handleDeleteAll = () => {
       setProducts([]);
    }

    const  handleDelete = (id) => {
        const updateProducts = products.filter((x) => x.id!== id);
        setProducts(updateProducts);
        
        
    }

   if(products.length === 0){
    return <p>Cart is Empty</p>
   }  

  return (
     <>
     
        <div className="container">
            <h1>Item in Cart: {totalProducts}</h1>
            {products.map((items) => {
                return (
                    <div className="box" key={items.id}>
                        <p>{items.name}, Rs.{items.price}</p>
                        <button className='item_btn' 
                        onClick={() => {
                            handleDelete(items.id);
                        }}
                        >Delete</button>
                    </div>
                )
            })}
            <button onClick={handleDeleteAll}>Delete All</button>
            
        </div>
     </>
  )
}

export default Cart

// const Cart = () => {
  
//     const [totalProducts , setTotalProduct] = useState(items.length);
//     const [products, setProducts] = useState(items);

//     const handleDeleteAll = () => {
//         setTotalProduct(0);
//         setProducts([]);
//     }

//     const  handleDelete = (id) => {
//         const updateProducts = products.filter((x) => x.id!== id);
//         setProducts(updateProducts);
//         setTotalProduct(updateProducts.length)
//     }

//     const handleReset = () => {
//         setProducts(items)
//         setTotalProduct(items.length);
//     }

//   return (
//      <>
     
//         <div className="container">
//             <h1>Item in Cart: {totalProducts}</h1>
//             {products.map((items) => {
//                 return (
//                     <div className="box" key={items.id}>
//                         <p>{items.name}, Rs.{items.price}</p>
//                         <button className='item_btn' 
//                         onClick={() => {
//                             handleDelete(items.id);
//                         }}
//                         >Delete</button>
//                     </div>
//                 )
//             })}
//             <button onClick={handleDeleteAll}>Delete All</button>
//             <button onClick={handleReset}>Reset</button>
//         </div>
//      </>
//   )
// }

// export default Cart