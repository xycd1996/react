import { useEffect } from 'react'

const useBottomOffset = el => {
  useEffect(() => {
    el.current.style.paddingBottom = '60px'
  }, [el])
}

export default useBottomOffset
