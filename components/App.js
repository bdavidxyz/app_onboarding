import React from 'react'
import { Link, browserHistory } from 'react-router'
require("./app.less");

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/Obd1">Obd1</Link>
        {' '}
        <Link to="/Obd2">Obd2</Link>
        {' '}
        <Link to="/bar">Bar</Link>
      </header>

      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}
