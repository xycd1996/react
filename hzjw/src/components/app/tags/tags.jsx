import React, { Component } from 'react'
import pureRender from 'pure-render-decorator'

import styles from './tags.module.sass'

class Tags extends Component {
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
          {tags.map((tag, index) => {
            return (
              <li
                data-id={tag.sort}
                onClick={this.show}
                className={selected === tag.sort ? styles.tagItem : ''}
                key={`${tag}-${index}`}
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
    const selected = e.target.getAttribute('data-id')
    this.setState({
      selected: parseInt(selected)
    })
  }
}

export default pureRender(Tags)
