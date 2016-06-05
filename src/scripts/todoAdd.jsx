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
    isBtnEnabled(text) {
        let retorno=!this.isTextBlank(text);
        if(retorno) {
            return '';
        } else{
            return 'disabled';
        }
    }
    onTextChange(evt) {        
        this.props.inputChangeActions(evt.currentTarget.value);        
    }
    onButtonClick(evt) {
        evt.preventDefault();
        this.props.addTodoActions({ name: this.props.inputChange,enabled: false });
        this.props.inputChangeActions('');
        this.refs.txt.focus();
    }
    render() {
        return (
            <div className="add-comp">
                <form action="/">
                    <input type="text" ref="txt" onChange={this.onChange}  placeholder="todo" value={this.props.inputChange}/>
                    <button type="submit" ref="btn" disabled={this.isBtnEnabled(this.props.inputChange)} className={this.isEnabledCss()} onClick={this.onClick}>Add</button>
                </form>
            </div >
        );
    }
}

TodoAdd.propTypes={ enabled: React.PropTypes.boolean };
TodoAdd.propTypes={ inputChangeActions: React.PropTypes.func };
TodoAdd.propTypes={ addTodoActions: React.PropTypes.func };
TodoAdd.propTypes={ inputChange: React.PropTypes.string };

export default TodoAdd;