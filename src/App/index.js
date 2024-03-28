import '../CSS/Main.css';
import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

function App() {  
  return ( 
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  );
}

export default App;



// const defaultTodos = [
//   {text: 'Cortar cebolla', completed:true},
//   {text: 'tomar el curso de react', completed:false},
//   {text: 'llorar con la llorona', completed:false},
//   {text: 'algo que no recuerdo', completed:false},
//   {text: 'estados derivados', completed:false}
// ]

//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos) )
//localStorage.removeItem('TODOS_V1');


