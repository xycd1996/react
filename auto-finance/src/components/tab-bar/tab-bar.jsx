import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './tab-bar.module.scss'

const TabBar = memo(() => {
  return (
    <>
      <footer className={styles['tab-bar']}>
        <ul className={styles['container']}>
          <li>
            <NavLink
              exact
              className={styles['item']}
              activeClassName={styles['item-selected']}
              to="/"
            >
              <div className={styles['home']} />
              <center>首页</center>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles['item']}
              activeClassName={styles['item-selected']}
              to="/search-car"
            >
              <div className={styles['search-car']} />
              <center>寻车</center>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles['item']}
              activeClassName={styles['item-selected']}
              to="/financial"
            >
              <div className={styles['financial']} />
              <center>金融</center>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles['item']}
              activeClassName={styles['item-selected']}
              to="/mine"
            >
              <div className={styles['mine']} />
              <center>我的</center>
            </NavLink>
          </li>
        </ul>
      </footer>
    </>
  )
})

export default TabBar
