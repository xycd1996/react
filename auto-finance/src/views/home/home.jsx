import React, { useRef } from 'react'
import SearchBar from '@components/search-bar/search-bar'
import Carousel from '@components/carousel/carousel'
import Advertising from '@components/advertising/advertising'
import Recommend from '@components/recommend/recommend'
import styles from './home.module.scss'
import useBottomOffset from '@assets/hooks/bottom-offset'
import useScroll from '@/assets/hooks/scroll'

const Home = () => {
  const homeEl = useRef(null)
  const scrollContainer = useRef(null)
  useBottomOffset(homeEl)
  const a = useScroll(scrollContainer)
  console.log(a)
  return (
    <>
      <div ref={scrollContainer} className={styles['home']}>
        <div ref={homeEl}>
          <SearchBar />
          <Carousel />
          <Advertising />
          <Recommend />
        </div>
      </div>
    </>
  )
}

export default Home
