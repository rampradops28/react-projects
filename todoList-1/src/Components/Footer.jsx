import React from 'react'
 

const Footer = ({length}) => {
   

return (
  <>
    <p>{length} list {length === 1 ? "item" : "items"}</p>
  </>
     
);
}

 

export default Footer