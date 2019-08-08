import { useEffect } from 'react'

const useBottomOffset = el => {
  useEffect(() => {
    el.current.style.bottom = '60px'
  }, [el])
}

export default useBottomOffset
