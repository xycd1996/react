import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import BScroll from '@better-scroll/core'

let myScroll

const Scroll = ({ children, upLoading }) => {
  const wrapperDom = useRef(null)
  const contentDom = useRef(null)
  useEffect(() => {
    myScroll = _init()
    _onScroll(myScroll)
    return () => {
      myScroll.destroy()
    }
  }, [])

  const _init = () => {
    if (!wrapperDom) {
      return
    }
    const myScroll = new BScroll(wrapperDom.current, {
      scrollY: true,
      click: true,
      probeType: 3
    })
    setTimeout(() => {
      myScroll.refresh()
    }, 200)
    return myScroll
  }

  const _refresh = () => {
    myScroll.refresh()
  }

  const _onScroll = scroll => {
    scroll.on('scroll', e => {
      const offsetHeight =
        wrapperDom.current.offsetHeight +
        Math.abs(e.y) -
        contentDom.current.offsetHeight
      offsetHeight > 0 && upLoading(_refresh)
    })
  }

  return (
    <div
      className="wrapper"
      ref={wrapperDom}
      style={{ height: '100%', overflow: 'hidden', padding: '0 14px' }}
    >
      <div ref={contentDom}>{children}</div>
    </div>
  )
}

Scroll.propTypes = {
  upLoading: PropTypes.func,
  children: PropTypes.array
}

Scroll.defaultProps = {
  upLoading: () => {
    console.log('无需上拉刷新')
  }
}

export default Scroll
