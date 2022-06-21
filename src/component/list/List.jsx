import React from 'react';
import './List.scss';

const list = (props) => {
  const { filterList } = props;
  
  return (
    <div className='filter__list'>{filterList}</div>
    
  )
}

export default list;