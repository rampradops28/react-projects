import React from 'react'
import { FaTrash } from "react-icons/fa";

const Lineitems = ({items,handleCheck,handleRemove}) => {
  return (
    <li key={items.id}>
    <input
      onChange={() => handleCheck(items.id)}
      type="checkbox"
      checked={items.checked}
      required
    />
    <label
    style={(items.checked) ? {textDecoration: "line-through"}: null} 
      onDoubleClick={() => handleCheck(items.id)}
    >{items.item}</label>
    <FaTrash 
      onClick={() => handleRemove(items.id)}
      role="button"
      tabIndex="0"
      aria-label={`Delete ${items.item}`}
    /> 
  </li>
  )
}

export default Lineitems