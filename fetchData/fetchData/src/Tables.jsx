import React from 'react'
import Row from './Row'
const Tables = ({items}) => {
  return (
    <div>
    <table>
        <tbody>
            {items.map((item) => (
                <Row key={item.id} item={item} />
            ))}
        </tbody>
    </table>
 </div>
  )
}

export default Tables