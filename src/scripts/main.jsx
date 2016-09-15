import React from 'react';
import {
  Provider
}
from 'react-redux';
import {
  render
}
from 'react-dom';
import {
  createStore
}
from 'redux';

import AppReducers from './reducers/index';
import AppContainer from './appContainer.jsx';

const defaultStore = {
  todos: [{
    label: 'aaa213213',
    completed: false,
    id: 0
  }, {
    label: 'bbb',
    completed: false,
    id: 1
  }, {
    label: 'ccc',
    completed: true,
    id: 2
  }],
  inputChange: '',
  filterTodos: 'all'
};

let store = createStore(AppReducers, defaultStore, window.devToolsExtension && window.devToolsExtension());

render( < Provider store = {
    store
  } >
  < AppContainer / >
  < /Provider > ,
  document.getElementById("example")
);