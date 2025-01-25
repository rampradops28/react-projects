import React from 'react'

const ListItem = ({items}) => {
  return (
     <li>
        {JSON.stringify(items)}
         
     </li>
  )
}

export default ListItem