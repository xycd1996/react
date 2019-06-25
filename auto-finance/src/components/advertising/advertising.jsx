import React from 'react'
import styles from './advertising.module.scss'

const sourceData = [
  {
    title: '额度最高',
    detail: '1000万'
  },
  {
    title: '费率最低',
    detail: '0.04%/天'
  },
  {
    title: '最长期限',
    detail: '60天'
  },
  {
    title: '保证金最低',
    detail: '20%'
  }
]

const Advertising = () => {
  return (
    <>
      <div className={styles['advertising']}>
        <div className={styles['feature']}>
          <i className="iconfont icon-wenben">&nbsp; 材料简单</i>
          <i className="iconfont icon-shandian">&nbsp; 放款快</i>
          <i className="iconfont icon-icon-test">&nbsp; 定制化服务</i>
        </div>
        <div className={styles['stock']}>
          <h1>库存融资</h1>
          <div className={styles['detail']}>
            <ul>
              {sourceData.map((item, index) => (
                <li key={index} className={styles['stock-item']}>
                  <h2>{item.title}</h2>
                  <center className={styles['quantity']}>{item.detail}</center>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Advertising
