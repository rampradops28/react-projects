import React, { useState } from 'react'
import '../CartPro/Home.css'
import Cart from './Cart';

const Home = () => {

    const [productName , setProductName] = useState('');
    const [price , setPrice] = useState('');
    const [cartItem , setCartItem] = useState([]);

    const addToCart = (e) => {
        e.preventDefault();
        if(productName && price) {
            const list = {
                id: Date.now(),
                name: productName,
                price: parseFloat(price)
            }
            setCartItem([...cartItem,list])
            console.log(list);
        }

       setProductName('')
       setPrice('')
    }

  return (
     <>
        <div className="container">
            <h1>Add Product</h1>
            <form className="form" onSubmit={addToCart}>

                <label htmlFor="productName" >ProductName</label>
                {/*Controlled Inputs */}
                <input type="text" value={productName} 
                    onChange={(e) => {
                        setProductName(e.target.value);
                    }}
                />

                <label htmlFor="price">Price</label>
                <input type="number" value={price} 
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                />

                <button type='submit'>Add to Cart</button>
            </form>
            <Cart products={cartItem} setProducts={setCartItem}/>
        </div>
     </>
  )
}

export default Home