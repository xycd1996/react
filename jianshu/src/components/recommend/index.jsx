import React, { Component } from 'react'

import './style.sass'

export default class Recommend extends Component {
  render() {
    const { author, changeAuthorList } = this.props
    return (
      <div className='recommend'>
        <div className='main-title'>
          推荐作者
          <span className='icon-spinner9' onClick={() => changeAuthorList()}>
            换一批
          </span>
        </div>
        <ul className='author-list'>
          {author.users.map((item, index) => {
            return (
              <li key={`${item}${index}`} data-id={item.id}>
                <div className='left-container'>
                  <img src={item.avatar_source} alt='' className='avatar' />
                </div>
                <div className='middle-container'>
                  <div className='name'>{item.nickname}</div>
                  <div className='description'>
                    写了{(item.total_wordage / 1000).toFixed(1)}k字 ·{' '}
                    {(item.total_likes_count / 1000).toFixed(1)}k喜欢
                  </div>
                </div>
                <div className='right-container'>
                  <div className='attention'>
                    <i className='icon-plus' />
                    关注
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        <button className='view-all'>查看全部 ></button>
      </div>
    )
  }
}
