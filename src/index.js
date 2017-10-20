import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import KeyPad from './KeyPad'
import ResetKeyPad from './ResetKeyPad'
import NumberKeyPad from './NumberKeyPad'
import OperatorKeyPad from './OperatorKeyPad'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<KeyPad />, document.getElementById('TheKeyPad'));
ReactDOM.render(<ResetKeyPad />, document.getElementById('TheResetPad'));
ReactDOM.render(<NumberKeyPad />, document.getElementById('TheNumberPad'));
ReactDOM.render(<OperatorKeyPad />, document.getElementById('TheOperatorPad'));
registerServiceWorker();
