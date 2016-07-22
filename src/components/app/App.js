import React, { Component, PropTypes } from 'react'
// import { Link } from 'react-router'
import style from './App.css'


class App extends Component {
  render() {
    return (
      <div className={style.base}>
        <p className={style.begin}>Begin by editing <code>src/index.js</code></p>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
