import React from 'react';
import TodoAdd from './todoAdd';
import TodoList from './todoList';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:[]
        };

        this.onAdd = this.onAddTodo.bind(this);
        this.onClick = this.onClickItem.bind(this);

    }
    onAddTodo(text) {
        let todos = JSON.parse(JSON.stringify(this.state.todos));
        todos.push({label:text, completed:false, id:todos.length});
        this.setState({todos:todos});
    }
    onClickItem(todo) {
        console.log('click', todo);
        todo.completed=!todo.completed;
        let todos = JSON.parse(JSON.stringify(this.state.todos));
        let selected = todos.filter(function(item) {
            return item.id == todo.id; // Filter out the appropriate one
        }); // Get result and ac

        selected.completed=todo.completed;

        this.setState({todos:todos});
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
            <div>
                <TodoAdd onAdd = {this.onAdd}/>
                <TodoList todos={this.state.todos} onClick={this.onClick}/>
            </div>
        );
    }
}

export default TodoApp;