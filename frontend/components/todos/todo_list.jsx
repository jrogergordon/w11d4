import React from 'react';
import TodoListContainer from './todo_list_container.jsx';
import TodoListItem from './todo_list_item'
import TodoForm from "./todo_form"

const TodoIndex = (props) => {
    return (
        <div>
            <h1>All Todo</h1>
            <ul>
                <li>
                {props.todos.map((todo) => {
                    return <TodoListItem key={todo.id} todo={todo} /> 
                }
                )}
                </li>
                <li>
                    <TodoForm />
                </li>
            </ul>
        </div>
    )
}

export const ReceiveTodo = (props) => {
    handleSubmit(e) {
        e.preventDefault();

        this.props.receiveTea(this.state);

        this.setState({
            id: Math.floor(Math.random() * 1000000),
            title: '',
            body: '',
            done: ''
        })
    }
}


export default TodoIndex;

