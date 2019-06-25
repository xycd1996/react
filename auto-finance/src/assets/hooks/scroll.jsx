import React, { useEffect } from 'react'
import BScroll from '@better-scroll/core'

const useScroll = el => {
  useEffect(() => {
    const scroll = new BScroll(el.current, {
      click: true,
      scrollY: true,
      probeType: 3
    })
    _refresh(scroll)
    _onScroll(scroll)
    return () => {
      _destroy(scroll)
    }
  }, [el])

  const _refresh = scroll => {
    scroll.refresh()
  }

  const _onScroll = scroll => {
    scroll.on('scroll', e => {
      console.log(e)
    })
  }

  const _destroy = scroll => {
    scroll.destroy()
  }
}

export default useScroll
