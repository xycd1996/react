import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.sass'

export default class ArticleList extends Component {
  render() {
    const { articleList } = this.props
    return (
      <div className='article-list'>
        {articleList.map((item, index) => {
          return (
            <div className='article-list-item' key={`${item}${index}`}>
              <div className='left-container'>
                <div className='title-container'>
                  <a href='/' target='_blank'>
                    {item.title}
                  </a>
                </div>
                <div className='description-container'>{item.description}</div>
                <div className='attributes-container'>
                  <a href='/' className='author'>
                    {item.author}
                  </a>
                  <a href='/' className='comment'>
                    <i className='icon-bubble' />
                    {item.comment}
                  </a>
                  <span className='like'>
                    <i className='icon-heart' />
                    {item.like}
                  </span>
                </div>
              </div>
              <div
                className={
                  item.img ? 'right-container' : 'right-container hide'
                }
              >
                <a href='/'>
                  <img src={item.img} alt='' />
                </a>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

ArticleList.propTypes = {
  articleList: PropTypes.array
}

ArticleList.defaultProps = {
  articleList: []
}
