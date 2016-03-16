// import page from '../../node_modules/page/page';
// import handlebars from '../../node_modules/handlebars/dist/handlebars';
// import jquery from '../../node_modules/jquery/dist/jquery';
// import Controller from './core/controller';
import React from '../../node_modules/react/dist/react';
import ReactDOM from '../../node_modules/react-dom/dist/react-dom';

class App {
    constructor() {
            // this.$ = jquery;
            // this.router = page;
            // this.handlebars = handlebars;
            // this.controller = new Controller(this);
            // this.controller.start();
            ReactDOM.render( <h1>Hello, world!</h1>,
                document.getElementById('example')
            );
        }
        // //encapsulating template engine so its easy to change
        // compile(template) {
        //     return this.handlebars.compile(template);
        // }
}

window.app = new App();