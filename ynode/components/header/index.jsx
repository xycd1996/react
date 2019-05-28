import React from 'react'
import Link from 'next/link'

import styles from './header.sass'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src='/static/cnodejs_light.svg' height='30px' alt='ynode' />
      </div>
      <div className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href='/'>
              <a>首页</a>
            </Link>
          </li>
          <li>
            <Link href='/message'>
              <a>未读消息</a>
            </Link>
          </li>
          <li>
            <Link href='my'>
              <a>个人中心</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
