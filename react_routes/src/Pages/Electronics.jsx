import React from 'react'
import {Link} from 'react-router-dom'
import { electronics } from '../Data/dataset'
 

const Electronics = () => {
  return (
    <div>
      <div className="card-header">
        <h1>Electronics</h1>
        <Link to={'/'} className="btn-danger-link">Home</Link>
      </div>
      <div className="card-grid">
        {electronics.map((item) =>{
          return( 
            <div className="card" key={item.id}>
              <img src={item.imageLink} alt={item.name} 
              style={{height:"100",width:"50"}}
              
              />
              <p>
                <span className="product-detials">Product</span>{item.name}
              </p>
              <p>
                <span className="product-detials">Price</span>{item.price}
              </p>
              <Link className="btn-link" to={`/Electronics/${item.id}`}>
                View Products
              </Link>
            </div>
          )
        })}
      </div>
    </ div>
  )
}

export default Electronics