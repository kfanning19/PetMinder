import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function initializeMessageBoard() {
    ReactDOM.render(<MessageBoard />, document.getElementById('#message-board'));
}
registerServiceWorker();
