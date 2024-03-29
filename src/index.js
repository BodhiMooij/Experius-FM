import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));

serviceWorker.register();
