function TodoItem({ text, completed, onComplete }){
    return(
      <li>
        
        <button
          onClick={onComplete}
          className={`check ${completed && "check-active"}`}
        />
        <p>{text}</p>
        <span className="close">x</span>
      </li>
    );
  }
  export {TodoItem};