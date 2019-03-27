import React, { Component } from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'
import * as codes from './common/js/newsCode'

export default class None extends Component {
  render() {
    return (
      <Router>
        <div className='none'>
          <ul>
            <li>
              ——————App页面——————
              <ul>
                <li>
                  <Link to={`/app/news/${codes.PoliceDynamicCode}`}>
                    警务动态
                  </Link>
                </li>
                <li>
                  <Link to={`/app/news/${codes.SafetyPrecautionCode}`}>
                    安全防范
                  </Link>
                </li>
                <li>
                  <Link to={`/app/news/${codes.WantedSurveyCode}`}>
                    通缉协查
                  </Link>
                </li>
                <li>
                  <Link to={`/app/news/${codes.LostAndFound}`}>失物招领</Link>
                </li>
                <li>
                  <Link to={`/app/news/${codes.SearchNotices}`}>
                    在线寻人
                  </Link>
                </li>
              </ul>
            </li>
            <li>——————Admin页面——————</li>
          </ul>
        </div>
      </Router>
    )
  }
}
