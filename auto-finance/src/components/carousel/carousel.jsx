import React, { useEffect } from 'react'
import styles from './carousel.module.scss'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.css'

const Carousel = () => {
  useEffect(() => {
    const mySwiper = new Swiper('#swiper-box', {
      autoplay: {
        disableOnInteraction: false,
        delay: 3000
      },
      loop: true,
      preloadImages: false,
      pagination: {
        el: '.swiper-pagination',
        bulletClass: styles['my-bullet'],
        bulletActiveClass: styles['my-bullet-active']
      }
    })
  }, [])
  return (
    <>
      <div id='swiper-box' className={styles['carousel']}>
        <div className='swiper-wrapper'>
          <div className={`swiper-slide ${styles['swiper-item']}`}>
            <img src={require('./1.jpg')} alt='car' />
          </div>
          <div className={`swiper-slide ${styles['swiper-item']}`}>
            <img src={require('./2.jpg')} alt='car' />
          </div>
          <div className={`swiper-slide ${styles['swiper-item']}`}>
            <img src={require('./3.jpg')} alt='car' />
          </div>
        </div>
        <div className='swiper-pagination' />
      </div>
    </>
  )
}

export default Carousel
