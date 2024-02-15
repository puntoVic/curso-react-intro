function TodoItem({ text, completed, onComplete, onDelete }){
    return(
      <li>
        
        <CompleteIcon
          onClick={onComplete}
          className={`check ${completed && "check-active"}`}
        />
        <p>{text}</p>
        <DeleteIcon 
        className="close" 
        onClick = {onDelete} />
        
      </li>
    );
  }
  export {TodoItem};