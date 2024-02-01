function TodoList(props) {
  return (
    <div className="main__Div">
      <ul >
          {props.children}
      </ul>
    </div>
  );
}

export { TodoList };