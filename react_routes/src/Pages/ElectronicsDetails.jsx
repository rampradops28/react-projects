import React from 'react'
import { electronics } from '../Data/dataset'
import { useParams } from 'react-router-dom';

const ElectronicsDetails = () => {

    const {id} = useParams();
    const item = electronics.find((x) => x.id === +id);

    if(!item) {
        return (
            <div style={{paddingTop: '6rem',fontSize: '1.4rem',textAlign: 'center'}}>
                Item Not Found
            </div>
        )
    }
  return (
     <div className="sidebar">
        <h1>Product Details</h1>
        <div className="sidebar-content">
            <div className="product">
            <img 
            src={item.imageLink} 
            alt={item.name} 
            style={{height: '500px'}}
            />
            <p>
                <span className="product-details">
                    Product :
                </span> {item.name}
            </p>
            <p>
                <span className="product-details">
                    Price :
                </span> {item.price}
            </p>
            <p>
                <span className="product-details">
                    InStock :
                </span> {' '} {item.quantityAvailable}
            </p>
            </div>
        </div>
     </div>
  )
}

export default ElectronicsDetails