import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { books } from '../Data/dataset'

const Books = () => {

  const navigate = useNavigate();

  const NavigateRouter = () => {
    navigate('/');
  }

  const NavigateProductDetails = (id) => {
    navigate(`/Books/${id}`)
  }
  return (
    <div>
    <div className="card-header">
      <h1>Books</h1>
      {/* <Link to={'/'} className="btn-danger-link">Home</Link> */}
      <button className="btn-danger-link" onClick={NavigateRouter}>Home</button>
    </div>
    <div className="card-grid">
      {books.map((item) =>{
        return( 
          <div className="card" key={item.id}>
            <img src={item.imageLink} alt={item.name} 
            style={{height:"200"}}
          
            />
            <p>
              <span className="product-detials">Product : </span>{item.title}
            </p>
            <p>
              <span className="product-detials">Price : </span>{item.price}
            </p>
            {/* <Link className="btn-link" to={`/Books/${item.id}`}>
              View Products
            </Link> */}

            <button className="btn-link" onClick={() => {
              NavigateProductDetails(item.id)
            }}>
              View Products
            </button>
          </div>
        )
      })}
    </div>
  </ div>
  )
}

export default Books