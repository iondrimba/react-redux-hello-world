import React from 'react';

class TodoAdd extends React.Component {
    constructor(props) {
        super(props);
        this.props=props;
        this.onChange=this.onTextChange.bind(this);
        this.onClick=this.onButtonClick.bind(this);
    }
    isEnabledCss() {
        let enabledCss='disabled';
        console.log('isEnabledCss',this.props.inputChange);
        if(!this.isTextBlank(this.props.inputChange)) {
            enabledCss='';
        }
        return enabledCss;
    }
    isTextBlank(text) {
        let isblank=false;

        if(text.length===0) {
            isblank=true;
        }

        let result=text.match(/\w/g);
        if(result===null) {
            isblank=true;
        }

        return isblank;
    }
    enableButton(text) {
        let retorno=!this.isTextBlank(text);
        return retorno;
    }
    disableButton() {
        let retorno='';
        // if(this.state.enabled===false) {
        //     retorno='disabled';
        // }

        return retorno;
    }
    onTextChange(evt) {        
        this.props.inputChangeActions(evt.currentTarget.value);
    }
    onButtonClick() {
        //this.props.onAdd(this.state.name);
        //this.setState({ name: '',enabled: false });
        //dispatch(addTodo(evt.currentTarget.value,this.enableButton(evt.currentTarget.value)));
    }
    render() {
        return (
            <div className="add-comp">
                <input type="text" onChange={this.onChange}  placeholder="todo" value={this.props.inputChange}/>
                <button type="button" className={this.isEnabledCss()} disabled={this.disableButton()} onClick={this.onClick}>Add</button>
            </div >
        );
    }
}

TodoAdd.propTypes={ onAdd: React.PropTypes.func };
TodoAdd.propTypes={ enabled: React.PropTypes.boolean };
TodoAdd.propTypes={ inputChangeActions: React.PropTypes.func };
TodoAdd.propTypes={ inputChange: React.PropTypes.string };

export default TodoAdd;