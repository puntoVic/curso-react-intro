import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './Main.css';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed:true},
  {text: 'tomar el curso de react', completed:false},
  {text: 'llorar con la llorona', completed:false},
  {text: 'algo que no recuerdo', completed:false},
  {text: 'estados derivados', completed:false}
]

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
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
          {defaultTodos.map(todo =>(
            <TodoItem 
            key={todo.text}
            text={todo.text} 
            completed = {todo.completed}
            />
          ))}
        </TodoList>
        
        <CreateTodoButton />
      </div>
    </>
  );
}




export default App;

