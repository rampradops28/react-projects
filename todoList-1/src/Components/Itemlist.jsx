import React from 'react'
import Lineitems from './Lineitems'

const Itemlist = ({items,handleCheck,handleRemove}) => {
  return (
    <ul>
    {items.map((item) => (
      <Lineitems
      items={item}
      key={item.id}
      handleCheck={handleCheck}
      handleRemove={handleRemove}
      />
    ))}
  </ul>
  )
}

export default Itemlist