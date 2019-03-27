import React, { Component } from 'react'
import pureRender from 'pure-render-decorator'
import PropTypes from 'prop-types'

import styles from './tags.module.sass'

class Tags extends Component {
  static propTypes = {
    tags: PropTypes.array
  }

  static defaultProps = {
    tags: []
  }

  constructor(props) {
    super(props)
    this.state = {
      selected: 1
    }
    this.show = this.show.bind(this)
  }
  render() {
    const { tags } = this.props
    const { selected } = this.state
    return (
      <div className={styles.tags}>
        <ul className={styles.tagsContainer}>
          {tags.map(tag => {
            return (
              <li
                data-id={tag.sort}
                data-cate={tag.cate}
                onClick={this.show}
                className={
                  selected === tag.sort
                    ? `${styles.show} ${styles.tagItem}`
                    : styles.tagItem
                }
                key={tag.cate}
              >
                {tag.title}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  show(e) {
    const { changeNews } = this.props
    const selected = e.target.getAttribute('data-id')
    const cate = e.target.getAttribute('data-cate')
    this.setState({
      selected: parseInt(selected)
    })
    changeNews(cate)
  }
}

export default pureRender(Tags)
