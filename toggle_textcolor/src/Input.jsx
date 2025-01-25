import React from 'react' 
// import colors from 'color-name';

const Input = ({colorValue,setColorValue,setHexValue ,isDark ,setIsDark}) => {
  return (
     <form onSubmit={e => e.preventDefault()}>
        <label></label>
        <input 
            autoFocus
            type="text"
            placeholder='Add color name'
            required
            value={colorValue}
            onChange={e => {
                setColorValue(e.target.value)
                setHexValue((e.target.value))
            }}
        />
        <button 
            type="button"
            onClick={() => {
                setIsDark(!isDark)
            }}
        >
            Toggle TextColor
        </button>
     </form>
  )
}

export default Input