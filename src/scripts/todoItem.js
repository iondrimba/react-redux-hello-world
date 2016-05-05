import React from 'react';

class TodoItem extends React.Component {
   constructor(props) {
        super(props);
        this.props=props;
    }
    componentWillMount() {
        console.log('TodoItem componentWillMount');
        return true;
    }
    componentDidMount() {
        console.log('TodoItem componentDidMount');
        return true;
    }
    render() {
        console.log('TodoItem render');
        return (
            <li>{this.props.text}</li>
        );
    }
}

TodoItem.propTypes = { text: React.PropTypes.string.isRequired };

export default TodoItem;