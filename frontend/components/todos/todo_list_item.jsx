import React from 'react';
import TodoIndex from './todo_list';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <li>   
                Title: {this.props.todo.title}
            </li>
        )   
    }
  
}

export default TodoListItem;



