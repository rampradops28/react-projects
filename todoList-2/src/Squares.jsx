import React from 'react'

const Squares = ({colorValue,hexValue,isDark}) => {
  return (
    <section
        className='squares'
        style={{
            backgroundColor:colorValue,
            color: isDark ? "#000" : '#fff'
        }}
    >
        <p>{colorValue ? colorValue : 'Empty value'}</p>
        <p>{hexValue ? hexValue : 'null'}</p>
    </section>
  )
}

export default Squares