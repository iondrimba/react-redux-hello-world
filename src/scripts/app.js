import React from '../../node_modules/react/dist/react';
import ReactDOM from '../../node_modules/react-dom/dist/react-dom';
import TodoApp from './todoApp';

class App {
    constructor() {
        ReactDOM.render( < TodoApp  / > , document.getElementById('example'));
    }
}

new App();