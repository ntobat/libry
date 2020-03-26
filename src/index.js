import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
  	<div className="toolbar">
  		<h1 className="app-name">Libry</h1>
  	</div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);