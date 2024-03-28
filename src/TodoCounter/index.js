import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter(){
  const {completedTodos, totalTodos} = React.useContext(TodoContext);
  var completedText = "Felicidades! no tienes tareas pendientes";
  if(totalTodos != completedTodos){
    completedText = "Has completado " + completedTodos + " de " + totalTodos + " Todos";
  }

  return(
    <h1 >
      {completedText}
    </h1>
  );
}

export {TodoCounter};