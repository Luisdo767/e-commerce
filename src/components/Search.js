import React, { useState } from 'react'

const Search = ({handlerSearch}) => {

    const [searchValue, setSearchValue] = useState('')

  return (
    <div>
        <input type="text" onChange={(e) => setSearchValue(e.target.value) } />
        <button  onClick={() => handlerSearch(searchValue)}>Search</button>
    </div>
  )
}

export default Search