import React from '../../node_modules/react/dist/react';
import ReactDOM from '../../node_modules/react-dom/dist/react-dom';

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
            this.props.todos.map(function(todo) {
            return (<li>{todo}</li>);
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
                
class Main extends React.Component {

  constructor(props) {
super(props);
    this.onAdd=this.onAddTodo.bind(this);            
    this.state = {
    todos:[],
        name:''  
    };
  }                    
    onAddTodo(text) {
        console.log('main',text);
    var todos = this.state.todos;
        todos.push(text);        
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
        return (<div >
                < TodoAdd onAdd = {this.onAdd}  / >
                < TodoList todos={this.state.todos} / >
            < /div >);
    }
}

                            
class App {
    constructor() {      
        ReactDOM.render( < Main  / > , document.getElementById('example'));
    }
}

window.app = new App();