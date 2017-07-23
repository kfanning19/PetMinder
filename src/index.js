import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MessageBoard from './MessageBoard'
import registerServiceWorker from './registerServiceWorker';

function initializeMessageBoard() {
    ReactDOM.render(<MessageBoard petId={PHILOPETS.petId} />, document.getElementById('#message-board'));
}
registerServiceWorker();