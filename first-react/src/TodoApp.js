import { useState } from "react";

export default function TodoApp() {
    const [ todo, setTodo ] = useState('');
    const [ todoList, setTodoList ] = useState([]);
    const onChange = (e) => {
        setTodo(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        console.log(todo);
        if(todo.trim() === '') { return; }
        setTodoList(val => [...val, todo])
        setTodo('');
    }
    return (
        <div>
            <h1>My Todo List</h1>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text"
                    placeholder="Write your to do..."
                    value={ todo }
                    onChange={ onChange }
                />
                <button>Todo!</button>
            </form>
            <ul>
                { todoList.map((item, idx) => (<li key={idx}>{item}</li>)) }
            </ul>
            <ul>
                { todoList }
            </ul>
            <ul>
                { todoList.map((item, idx) => (<div key={idx}>{item}</div>)) }
            </ul>
        </div>
    )
}