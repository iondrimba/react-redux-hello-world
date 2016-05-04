import React from '../../node_modules/react/dist/react';

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
                            <li key={index}>{todo}</li>
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