import React from 'react';
import TodoAdd from './todoAdd.jsx';
import TodoList from './todoList.jsx';
import TodoFilter from './todoFilter.jsx';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }
    getCount(array){
        let count = 0;
        if(this.state.filter==='completed') {
            array.map(function(item){
                if(item.completed===true){
                    count++;
                }
            });
        }else{
            count = array.length;
        }

        return count;
    }
    render() {
        return (
            <div>
                <TodoAdd {...this.props}/>
                <TodoList {...this.props}/>
                <TodoFilter {...this.props} />
            </div>
        );
    }
}

export default TodoApp;