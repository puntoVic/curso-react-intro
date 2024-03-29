import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import React from 'react';

function AppUI() {
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext); 
  return (
    < >
      <div className="main__Div">
        <TodoCounter/>
        <TodoSearch />
        
        <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {(!loading && searchedTodos.length===0) && <EmptyTodos />}
          
          {searchedTodos.map(todo =>(
            <TodoItem 
            key={todo.text}
            text={todo.text} 
            completed = {todo.completed}
            onComplete = {() =>  completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        
        <CreateTodoButton  setOpenModal = {setOpenModal}/>

        {openModal &&(
          <Modal>
            <TodoForm/>
          </Modal>
        )}
      </div>
      
    </>
 )
}

export {AppUI};

