import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {receiveTodos} from './actions/todo_actions'
import {receiveTodo} from './actions/todo_actions'
import App from './components/app'
import Root from './components/root'
import { allTodos } from './reducers/selectors'
// import {removeTodo} from  './actions/todo_actions'

document.addEventListener("DOMContentLoaded", () => {
    
    const store = configureStore();
    window.store = store;
    // window.store.getState();
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.allTodos = allTodos;
    // window.removeTodo = removeTodo;
    ReactDOM.render(<Root store={store} />, document.getElementById("main"));

//   ReactDOM.render(<configureStore />, document.getElementById("main"));
});