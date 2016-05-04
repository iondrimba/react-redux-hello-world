import React from '../../node_modules/react/dist/react';
import TodoAdd from './todoAdd';
import TodoList from './todoList';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.onAdd=this.onAddTodo.bind(this);
        this.state = {
            todos:[],
            name:''
        };
    }
    onAddTodo(text) {
        console.log('main',text);
        let todos = JSON.parse(JSON.stringify(this.state.todos));
        todos.push(text);
        this.setState({todos:todos, name:''});
    }
    componentWillMount() {
        console.log('App componentWillMount');
        return true;
    }
    componentDidMount() {
        console.log('App componentDidMount');
        return true;
    }
    render() {
        console.log('App render');
        return (
            <div >
                < TodoAdd onAdd = {this.onAdd}  / >
                < TodoList todos={this.state.todos} / >
            < /div >
        );
    }
}

export default TodoApp;