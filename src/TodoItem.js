function TodoItem({ text, completed, onComplete, onDelete }){
    return(
      <li>
        
        <button
          onClick={onComplete}
          className={`check ${completed && "check-active"}`}
        />
        <p>{text}</p>
        <span 
        className="close" 
        onClick = {onDelete}>
          x
        </span>
      </li>
    );
  }
  export {TodoItem};