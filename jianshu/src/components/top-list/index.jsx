import React, { Component } from 'react'

import './style.sass'

export default class TopList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topList: [
        {
          img: require('./top_1.png'),
          url: '/'
        },
        {
          img: require('./top_2.png'),
          url: '/'
        },
        {
          img: require('./top_3.png'),
          url: '/'
        },
        {
          img: require('./top_4.png'),
          url: '/'
        },
        {
          img: require('./top_5.png'),
          url: '/'
        }
      ]
    }
  }

  render() {
    const { topList } = this.state
    return (
      <div className='top-list'>
        <ul>
          {topList.map((item, index) => {
            return (
              <li className='item' key={`${item}${index}`}>
                <a href={item.url}>
                  <img src={item.img} width='100%' height='48' alt='' />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
