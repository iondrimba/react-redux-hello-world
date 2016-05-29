import { combineReducers } from 'redux';
import todos from './todos';
import addTodo from './addTodo';
import toggleTodo from './toggleTodo';
import filterTodos from './filterTodos';
import inputChange from './inputChange';

const AppReducers=combineReducers({
    todos,
    addTodo,
    toggleTodo,
    filterTodos,
    inputChange
});

export default AppReducers;