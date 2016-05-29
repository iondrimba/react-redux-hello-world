import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';
import AppReducers from './reducers/index';
import TodoApp from './todoApp.jsx';

let store = createStore(AppReducers);

render(
   <Provider store={store}>
    <TodoApp />
  </Provider> , document.getElementById('example'));