import './TodoCounter.css'

function TodoCounter({total, completed}){
    var completedText = "Felicidades! no tienes tareas pendientes";
    if(total != completed){
      completedText = "Has completado " + completed + " de " + total + " Todos";
    }

    return(
      <h1 >
        {completedText}
      </h1>
    );
  }

export {TodoCounter};