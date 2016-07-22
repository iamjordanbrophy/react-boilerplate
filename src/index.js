import React from 'react'
import { render } from 'react-dom'
// import { Router, Route, browserHistory } from 'react-router'
import App from './components/app/App.js'

render((
    <App />
), document.getElementById('app'))

// <Router history={browserHistory}>
//     <Route component={App} path="/" />
// </Router>