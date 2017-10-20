import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import KeyPad from './KeyPad'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<KeyPad />, document.getElementById('TheKeyPad'));
registerServiceWorker();
