import React from 'react'
import { ClearButton, TextField } from '../App.style'

const Search = ({ filterText, onFilter, onClear }) => {
  return (
    <>
      <TextField
        id='search'
        type='text'
        placeholder='Filter By Name'
        aria-label='Search Input'
        value={filterText}
        onChange={onFilter}
      />
      <ClearButton type='button' onClick={onClear}>
        X
      </ClearButton>
    </>
  )
}

export default Search
