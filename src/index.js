import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NumberKeyPad from './NumberKeyPad'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<NumberKeyPad />, document.getElementById('TheKeyPad'));
registerServiceWorker();
