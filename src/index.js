import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import ContextProvider from './Context';
import './index.css';
import App from './App';
// import 'bootswatch/dist/darkly/bootstrap.min.css';

import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<BrowserRouter>
		<ContextProvider>
			<App/>
		</ContextProvider>
	</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
