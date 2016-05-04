import React from '../../node_modules/react/dist/react';

class TodoAdd extends React.Component {
    constructor(props) {
        super(props);
        this.props=props;
        this.onChange=this.onTextChange.bind(this);
        this.onClick=this.onButtonClick.bind(this);
         this.state = {
            name: this.props.name
        };
    }
     onTextChange(evt) {
         console.log('onTextChange',evt.currentTarget.value);
         this.setState({ name: evt.currentTarget.value });
    }
     onButtonClick() {
        this.props.onAdd(this.state.name);
    }
    componentWillMount() {
        console.log('TodoAdd componentWillMount');
        return true;
    }
    componentDidMount() {
        console.log('TodoAdd componentDidMount');
        return true;
    }
    render() {
        console.log('TodoAdd render');
        return (<div >
            < input type = "text" onChange={this.onChange}  placeholder = "todo"  / >
            < button type = "button" onClick={this.onClick} > Add < /button >
        < /div >);
    }
                }

TodoAdd.propTypes = { onAdd: React.PropTypes.function };
TodoAdd.propTypes = { name: React.PropTypes.string };

export default TodoAdd;