import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
     <div className="container">
        <h1 className="title">Welcome to Eshop</h1>
        <div className="home">
            <img src="https://images.pexels.com/photos/6962206/pexels-photo-6962206.jpeg" 
            alt="img" 
            className="banner" 
            height="600"
            width="500"
            />
            <div className="category">
                <h1>PICK YOUR CATEGORY</h1>
                <div className="links">
                    <Link to={"/Electronics"} className='link'>Electronics</Link>
                    <Link to={"/Books"} className='link' >Books</Link>
                </div>
            </div>
        </div>
     </div>
  )
}

export default Home