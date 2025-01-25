import React from 'react'

const Searchitem = ({search,setSearchItem}) => {
  return (
     <form onSubmit={e => e.preventDefault()}> {/*to avoid the problem that for each time we refresh the page, it reloads*/} 
        <label>Search</label>
        <input
            id="search"
            type="text"
            placeholder='Search items'
            role='Searchbox'
            value={search}
            onChange={e => setSearchItem(e.target.value)}
        />

     </form>
  )
}

export default Searchitem