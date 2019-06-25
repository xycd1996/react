import React from 'react'
import styles from './search-bar.module.scss'

const SearchBar = () => {
  return (
    <>
      <header className={styles['search-bar']}>
        <div className={`iconfont icon-icon_left ${styles['back']}`} />
        <div className={styles['box']}>
          <i className={`iconfont icon-icon_search ${styles.search}`} />
          <span className={styles['text']}>请输入品牌或车型</span>
        </div>
      </header>
    </>
  )
}

export default SearchBar
