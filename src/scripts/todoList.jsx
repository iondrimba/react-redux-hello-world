import React from 'react';
import TodoItem from './todoItem.jsx';
import _ from 'lodash';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.props=props;
    }
    filterItems() {
        let itens=[];
        if(this.props.filterTodos==='completed') {
            this.props.todos.map(function(todo) {
                if(todo.completed) {
                    itens.push(todo);
                }
            });
        } else {
            itens=this.props.todos;
        }

        return itens;
    }
    render() {
        //let itens=this.filterItems();
        return (
            <div className="todo-list">{
                this.props.todos.map(function(todo) {
                    return (
                        <TodoItem {...this.props} key={todo.id} todo={todo} onClick={this.props.onClick}/>
                    );
                }.bind(this))
            }
            </div>
        );
    }
}

TodoList.propTypes={ todos: React.PropTypes.array.isRequired };
TodoList.propTypes={ filterTodos: React.PropTypes.string.isRequired };


export default TodoList;