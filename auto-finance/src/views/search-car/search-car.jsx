import React, { useRef } from 'react'
import styles from './search-car.module.scss'
import Scroll from '@/components/scroll/scroll'
import SearchBar from '@/components/search-bar/search-bar'
import HotCar from '@components/hot-car/hot-car'
import useBottomOffset from '@assets/hooks/bottom-offset'
import CarList from '@components/car-list/car-list'

const SearchCar = () => {
  const searchCarEl = useRef(null)
  useBottomOffset(searchCarEl)
  return (
    <>
      <div ref={searchCarEl} className={styles['search-car']}>
        <Scroll>
          <SearchBar />
          <HotCar />
          <CarList />
        </Scroll>
      </div>
    </>
  )
}

export default SearchCar
