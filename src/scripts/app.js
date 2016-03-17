import React from '../../node_modules/react/dist/react';
import ReactDOM from '../../node_modules/react-dom/dist/react-dom';

class App {
    constructor() {
        var ComponentBusca = React.createClass({
            render: function() {
                return <div > < input type = "text"
                placeholder = "Search"
                value = "" > < /input> < button type = "button" > Buscar < /button > < /div > ;
            }
        });
        var Component = React.createClass({
            propTypes: {
                name: React.PropTypes.string.isRequired
            },
            render: function() {
                return <p > Hello { this.props.name } < /p>;
            }
        });

        var App = React.createClass({
            propTypes: {
                name: React.PropTypes.string.isRequired
            },
            render: function() {
                return <div >
                    < ComponentBusca / >
                    < Component name = { this.props.name } />  < /div>;
            }
        });
        ReactDOM.render( < App name = "John" / > , document.getElementById('example'));
    }
}

window.app = new App();