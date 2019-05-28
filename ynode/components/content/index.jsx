import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { normalizationTime } from '../../common/js/timeFilter'

import styles from './content.sass'

const Content = ({ topic }) => {
  const [routeName, setRouteName] = useState('')
  useEffect(() => {
    console.log(topic)
    setRouteName(Router.router.query.name)
  })

  return (
    <div className={styles.content}>
      <div className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href={{ pathname: '/' }}>
              <a className={routeName ? '' : styles.highLight}>全部</a>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: '/', query: { name: 'ask' } }}>
              <a className={routeName === 'ask' ? styles.highLight : ''}>
                问答
              </a>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: '/', query: { name: 'share' } }}>
              <a className={routeName === 'share' ? styles.highLight : ''}>
                分享
              </a>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: '/', query: { name: 'job' } }}>
              <a className={routeName === 'job' ? styles.highLight : ''}>
                招聘
              </a>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: '/', query: { name: 'good' } }}>
              <a className={routeName === 'good' ? styles.highLight : ''}>
                精华
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.list}>
        <ul className={styles.listContainer}>
          {topic.map(item => (
            <li key={item.id} className={styles.item}>
              <div className={styles.avatar}>
                <img
                  src={item.author.avatar_url}
                  alt={item.author.loginname}
                  width='30'
                  height='30'
                />
              </div>
              <div className={styles.reading}>190/56870</div>
              <div className={styles.title}>
                {item.good || item.top ? (
                  <span className={styles.top}>
                    {item.top ? '置顶' : '精华'}
                  </span>
                ) : (
                  <span className={styles.share}>
                    {item.tab === 'ask' ? '问答' : '分享'}
                  </span>
                )}
                {item.title}
              </div>
              <div className={styles.time}>
                {normalizationTime(item.last_reply_at)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Content
