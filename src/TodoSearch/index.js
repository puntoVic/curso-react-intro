import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  return (
    <div className="main__Div">
      <input 
        placeholder='Cortar Cebolla' 
        className='search'
        value = {searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
          
        }}
        />
    </div>
  );
}

export { TodoSearch };