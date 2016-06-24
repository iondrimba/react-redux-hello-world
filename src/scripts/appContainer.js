import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import addTodo from './actions/addTodo';
import filterTodos from './actions/filterTodos';
import inputChange from './actions/inputChange';
import toggleTodo from './actions/toggleTodo';
import TodoApp from './todoApp.jsx';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
  }
};



function mapStateToProps(store) {
  return {
    todos:getVisibleTodos(store.todos, store.filterTodos),
    addTodo:store.addTodo,
    inputChange:store.inputChange,
    filterTodos: store.filterTodos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodoActions: bindActionCreators(addTodo,dispatch),
    filterTodosActions: bindActionCreators(filterTodos, dispatch),
    inputChangeActions: bindActionCreators(inputChange, dispatch),
    toggleTodoActions: bindActionCreators(toggleTodo, dispatch)
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default AppContainer;
