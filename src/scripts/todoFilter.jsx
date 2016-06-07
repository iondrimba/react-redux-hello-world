import React from 'react';

class TodoFilter extends React.Component {
   constructor(props) {
        super(props);
        this.props=props;
        this.onClickTodos = this.onClickItemTodos.bind(this);
        this.onClickCompletos = this.onClickItemCompletos.bind(this);
    }
    onClickItemTodos() {
        this.props.filterTodosActions('all');
    }
    onClickItemCompletos() {
        this.props.filterTodosActions('completed');
    }
    isActive(className, filter) {
        let css = className;

        if(className===filter){
            css =`${className} active`;
        }

        return css;
    }
    render() {
        return (
            <div className="todo-filter">
                <button className={this.isActive('all',this.props.filterTodos)} onClick={this.onClickTodos} type="button">all</button>
                <button className={this.isActive('completed',this.props.filterTodos)} onClick={this.onClickCompletos} type="button">completed</button>
            </div>
        );
    }
}

TodoFilter.propTypes = { filterTodosActions: React.PropTypes.func };
TodoFilter.propTypes = { filterTodos: React.PropTypes.string.isRequired };

export default TodoFilter;