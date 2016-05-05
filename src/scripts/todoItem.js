import React from 'react';

class TodoItem extends React.Component {
   constructor(props) {
        super(props);
        this.props=props;
        this.onClick = this.onClickItem.bind(this);
    }
    componentWillMount() {
        console.log('TodoItem componentWillMount');
        return true;
    }
    componentDidMount() {
        console.log('TodoItem componentDidMount');
        return true;
    }
    onClickItem() {
        console.log('item click', this.props.todo);
        this.props.onClick(this.props.todo);
    }
    isCompletedCSS() {
        let className='todoItem';

        if(this.props.todo.completed) {
            className='todoItem completed';
        }

        return className;
    }
    render() {
        console.log('TodoItem render');
        return (
            <li className={this.isCompletedCSS()} onClick={this.onClick}>{this.props.todo.label}</li>
        );
    }
}

TodoItem.propTypes = { onClick: React.PropTypes.func };
TodoItem.propTypes = { todo: React.PropTypes.object.isRequired };

export default TodoItem;