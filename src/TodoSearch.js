import React from 'react';
function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios buscan todos de ' + searchValue);
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