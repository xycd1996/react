import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './tab-bar.module.scss'

const TabBar = () => {
  return (
    <>
      <div className={styles['tab-bar']}>
        <ul className={styles['container']}>
          <li>
            <NavLink to='/'>首页</NavLink>
          </li>
          <li>
            <NavLink to='/search-car'>寻车</NavLink>
          </li>
          <li>金融</li>
          <li>我的</li>
        </ul>
      </div>
    </>
  )
}

export default TabBar
