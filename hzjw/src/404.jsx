import React, { Component } from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

export default class None extends Component {
  render() {
    return (
      <Router>
        <div className='none'>
          <ul>
            <li>
              <Link to='/app'>app</Link>
            </li>
            <li>
              <Link to='/admin'>admin</Link>
            </li>
          </ul>
        </div>
      </Router>
    )
  }
}
