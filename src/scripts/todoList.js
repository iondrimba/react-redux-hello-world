import React from 'react';
import TodoItem from './todoItem';

class TodoList extends React.Component {
   constructor(props) {
        super(props);
        this.props=props;
        this.onClick = this.onClickItem.bind(this);
    }
    componentWillMount() {
        console.log('TodoList componentWillMount');
        return true;
    }
    componentDidMount() {
        console.log('TodoList componentDidMount');
        return true;
    }
    onClickItem(todo) {
        console.log('list item click', todo);
        this.props.onClick(todo);
    }
    render() {
        console.log('TodoList render');
        return (
            <div>{
                    this.props.todos.map(function(todo, index) {
                        return (
                            <TodoItem key={index} todo={todo} onClick={this.onClick}/>
                        );
                    }.bind(this))
                 }
            </div>
        );
    }
}

TodoList.propTypes = { todos: React.PropTypes.array.isRequired };
TodoList.propTypes = { onClick: React.PropTypes.func };
TodoList.defaultProps = {
    todos:[]
};

export default TodoList;