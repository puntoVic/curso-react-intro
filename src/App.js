import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './Main.css';
import React from 'react';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed:true},
//   {text: 'tomar el curso de react', completed:false},
//   {text: 'llorar con la llorona', completed:false},
//   {text: 'algo que no recuerdo', completed:false},
//   {text: 'estados derivados', completed:false}
// ]

//localStorage.SetItem('TODOS_V1', defaultTodos);
//localStorage.removeItem('TODOS_V1');


function useLocalStorage(itemName, initialValue){
  
  const localStorageItems = localStorage.getItem(itemName);
  let parsedItem;
  
  if(!localStorageItems){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }
  else{
    parsedItem = JSON.parse(localStorageItems);
  }
  
  const [item, setItem] = React.useState(parsedItem)
  
  const saveItem = (newItem) =>{
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}
function App() {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searcherTodos = todos.filter(
    (todo) => {
      const todoText =todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
   }

  

  console.log('los usuarios buscan todos de ' + searchValue);
  return (
    < >
      <div className="main__Div">
        <TodoCounter completed={completedTodos} total={totalTodos}/>
        <TodoSearch 
         searchValue = {searchValue}
         setSearchValue = {setSearchValue}
        />
        
        <TodoList>
          {searcherTodos.map(todo =>(
            <TodoItem 
            key={todo.text}
            text={todo.text} 
            completed = {todo.completed}
            onComplete = {() =>  completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        
        <CreateTodoButton />
      </div>
    </>
  );
}




export default App;

