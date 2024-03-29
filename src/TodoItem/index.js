
import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import {DeleteIcon} from '../TodoIcon/DeleteIcon';
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