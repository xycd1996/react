import React from 'react'
import styles from './hot-car.module.scss'

const HotCar = () => {
  return (
    <>
      <div className={styles['hot-car']}>
        <div className={styles['title']}>
          <i>&mdash;</i>热销车型<i>&mdash;</i>
        </div>
        <div className={styles['exhibitions']}>
          <ul className={styles['wrapper']}>
            <li className={styles['item']}>
              <div className={styles['img']}>
                <img src={require('./car.png')} alt="car" />
              </div>
              <center className={styles['name']}>梅萨德斯-奔驰</center>
            </li>
            <li className={styles['item']}>
              <div className={styles['img']}>
                <img src={require('./car.png')} alt="car" />
              </div>
              <center className={styles['name']}>梅萨德斯-奔驰</center>
            </li>
            <li className={styles['item']}>
              <div className={styles['img']}>
                <img src={require('./car.png')} alt="car" />
              </div>
              <center className={styles['name']}>梅萨德斯-奔驰</center>
            </li>
            <li className={styles['item']}>
              <div className={styles['img']}>
                <img src={require('./car.png')} alt="car" />
              </div>
              <center className={styles['name']}>梅萨德斯-奔驰</center>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default HotCar
