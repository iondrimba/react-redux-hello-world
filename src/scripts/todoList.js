import React from 'react';
import TodoItem from './todoItem';

class TodoList extends React.Component {
   constructor(props) {
        super(props);
        this.props=props;
    }
    componentWillMount() {
        console.log('TodoList componentWillMount');
        return true;
    }
    componentDidMount() {
        console.log('TodoList componentDidMount');
        return true;
    }
    render() {
        console.log('TodoList render');
        return (
            <div>{
                    this.props.todos.map(function(todo, index) {
                        return (
                            <TodoItem key={index} text={todo} />
                        );
                    })
                 }
            </div>
        );
    }
}

TodoList.propTypes = { todos: React.PropTypes.array.isRequired };
TodoList.defaultProps = {
    todos:[]
};

export default TodoList;