import React from 'react';
function TodoSearch({searchValue, setSearchValue,}) {

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