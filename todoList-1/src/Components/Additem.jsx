import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'
const Additem = ({newItem,setNewItem,handleSubmit}) => {
    const inputRef = useRef()
  return (
     <form onSubmit={handleSubmit}>
        <label>Add item</label>
        <input 
            autoFocus
            ref = {inputRef}
            id = 'additem'
            type = 'text'
            placeholder='add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />

        <button
            type="submit"
            aria-label='Add item'   
            onClick={() => inputRef.current.focus()} //to shift the focus
            
        >
            <FaPlus /> 
        </button>

     </form>
  )
}
console.log(Additem);

export default Additem