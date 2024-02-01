import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './Main.css';

const defaultTodos = [
  {text: 'Cortar cebolla', completed:true},
  {text: 'tomar el curso de react', completed:false},
  {text: 'llorar con la llorona', completed:false},
  {text: 'algo que no recuerdo', completed:false}
]

function App() {
  return (
    < >
      <div className="main__Div">
        <TodoCounter completed={10} total={15}/>
        <TodoSearch  />
        
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

