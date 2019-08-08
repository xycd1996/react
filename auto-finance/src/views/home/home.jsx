import React, { useRef, useState, useEffect } from 'react'
import SearchBar from '@components/search-bar/search-bar'
import Carousel from '@components/carousel/carousel'
import Advertising from '@components/advertising/advertising'
import Recommend from '@components/recommend/recommend'
import styles from './home.module.scss'
import useBottomOffset from '@assets/hooks/bottom-offset'
import Scroll from '@components/scroll/scroll'

let loadSwitch = true
let timer

const Home = () => {
  const [listData, setListData] = useState([{ key: 1 }, { key: 2 }, { key: 3 }])
  const homeEl = useRef(null)
  useBottomOffset(homeEl)
  useEffect(() => {
    return () => {
      clearTimeout(timer)
      loadSwitch = true
    }
  }, [])
  const upLoading = refresh => {
    if (!loadSwitch) {
      return
    }
    console.log('uploading')
    loadSwitch = false
    timer = setTimeout(() => {
      setListData(listData => [...listData, { key: 4 }])
      refresh()
      loadSwitch = true
    }, 2000)
  }
  return (
    <>
      <div ref={homeEl} className={styles['home']}>
        <Scroll upLoading={upLoading}>
          <SearchBar />
          <Carousel />
          <Advertising />
          <Recommend listData={listData} />
        </Scroll>
      </div>
    </>
  )
}

export default Home
