import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import addTodo from './actions/addTodo';
import filterTodos from './actions/filterTodos';
import inputChange from './actions/inputChange';
import toggleTodo from './actions/toggleTodo';
import TodoApp from './todoApp.jsx';

function mapStateToProps(state) {
  return {
    todos:state.todos,
    addTodo:state.addTodo,
    inputChange:state.inputChange,
    toggleTodo:state.toggleTodo,    
    filterTodos: state.filterTodos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodoActions: bindActionCreators(addTodo, dispatch),
    filterTodosActions: bindActionCreators(filterTodos, dispatch),
    inputChangeActions: bindActionCreators(inputChange, dispatch),
    toggleTodoActions: bindActionCreators(toggleTodo, dispatch)
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default AppContainer;
