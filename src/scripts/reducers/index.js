import { combineReducers } from 'redux';
import addTodo from './addTodo';
import toggleTodo from './toggleTodo';
import filterTodos from './filterTodos';

const AppReducers=combineReducers({
    addTodo,
    toggleTodo,
    filterTodos
});

export default AppReducers;