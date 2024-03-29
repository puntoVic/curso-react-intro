import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm(){
    const {
        setOpenModal, 
        addTodo
    } = React.useContext(TodoContext);
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const[newTodoValue,setNewTodoValue] = React.useState('');

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
            placeholder="Descripción de TODO" 
            value = {newTodoValue}
            onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                type="button"
                onClick={onCancel} 
                className="TodoForm-button todoForm-button--cancel">
                    Cancel</button>
                <button 
                type="submit" 
                className="TodoForm-button todoForm-button--create">
                    Crear</button>
            </div>
        </form>
    );
}

export {TodoForm};