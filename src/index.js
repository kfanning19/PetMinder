import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Grabs the Routes
var routes = require("./config/routes");

function initializeMessageBoard() {
    ReactDOM.render(routes, document.getElementById('#message-board'));
}
registerServiceWorker();
