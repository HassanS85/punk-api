import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {
  const { searchFilter } = props;

  return (
    <div>
      <input className='Search__Bar' placeholder='Type here to search' type="search" onInput={searchFilter}/>
    </div>
  )
}

export default SearchBar;