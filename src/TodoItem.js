
import {CompleteIcon} from './CompleteIcon.js';
import {DeleteIcon} from './DeleteIcon.js';
function TodoItem({ text, completed, onComplete, onDelete }){
    return(
      <li>
        
        <CompleteIcon completed = {completed} 
        onComplete = {onComplete}/>
        <p>{text}</p>
        <DeleteIcon 
        onDelete = {onDelete}/>
      </li>
    );
  }
  export {TodoItem};