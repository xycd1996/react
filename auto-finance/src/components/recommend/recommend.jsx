import React from 'react'
import styles from './recommend.module.scss'

const Recommend = ({ listData }) => {
  return (
    <>
      <div className={styles['recommend']}>
        <div className={styles['title']}>&mdash; 热门推荐 &mdash;</div>
        <div className={styles['list']}>
          <ul>
            {listData.map((item, index) => (
              <li key={index} className={styles['item']}>
                <div className={styles['top']}>
                  <ul>
                    <li>定金5000</li>
                    <li>保证金6万</li>
                    <li>期限60天</li>
                    <li>放款快</li>
                  </ul>
                </div>
                <div className={styles['content']}>
                  <div className={styles['image']}>
                    <img src={require('./timg.jpg')} alt="car" />
                  </div>
                  <div className={styles['car-detail']}>
                    <div className={styles['name']}>奧迪A6L</div>
                    <div className={styles['era']}>
                      2018款 30周年TFSL 进取型
                    </div>
                    <div className={styles['deal-place']}>经销地：北京</div>
                    <div className={styles['discount']}>
                      申请东正金融零售可再减10000元
                    </div>
                  </div>
                </div>
                <div className={styles['bottom']}>
                  <span className={styles['price']}>
                    销售价<i>￥32.78</i>万
                  </span>
                  <span className={styles['old-price']}>
                    厂商指导价￥40.25万
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Recommend
