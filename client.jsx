import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
const App = require('./App').default;

const preloadeState=window.__PRELOADED_STATE__
delete window.__INITIAL_STATE__;

ReactDOM.render((
	<BrowserRouter>
		<App  {...preloadeState}/>
	</BrowserRouter>
), document.getElementById('root'));