
import {CompleteIcon} from './CompleteIcon.js';
import {DeleteIcon} from './DeleteIcon.js';
function TodoItem({ text, completed, onComplete, onDelete }){
    return(
      <li>
        
        <CompleteIcon/>
        <p>{text}</p>
        <DeleteIcon/>
      </li>
    );
  }
  export {TodoItem};