function CreateTodoButton() {
  return (
    <button
          className={'plus'}
          onClick={(event) => {
            console.log('le diste click')
            console.log(event.target)}
          }
        />
  )
}

export {CreateTodoButton}