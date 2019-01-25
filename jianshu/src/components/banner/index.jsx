import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import './style.sass'

export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showImg: 0,
      showToggle: false
    }
    this.onMouseOverBanner = this.onMouseOverBanner.bind(this)
    this.onMouseOutBanner = this.onMouseOutBanner.bind(this)
    this.bannerPre = this.bannerPre.bind(this)
    this.bannerNext = this.bannerNext.bind(this)
  }

  render() {
    const { imgList, width, height } = this.props
    const { showImg, showToggle } = this.state
    return (
      <div
        className='banner'
        onMouseOver={this.onMouseOverBanner}
        onMouseOut={this.onMouseOutBanner}
      >
        <div className='container'>
          <div
            className={showToggle ? 'pre-container show' : 'pre-container'}
            onClick={this.bannerPre}
          >
            <i className='icon-arrow-left2' />
          </div>
          <ul className='images-container'>
            {imgList.map((item, index) => {
              return (
                <CSSTransition
                  in={index === showImg ? true : false}
                  classNames='image-animation'
                  timeout={100}
                  key={`${item}${index}`}
                >
                  <li className='item'>
                    <img
                      className='image'
                      src={item}
                      width={width}
                      height={height}
                      alt=''
                    />
                  </li>
                </CSSTransition>
              )
            })}
          </ul>
          <ul className='bar-container'>
            {imgList.map((item, index) => {
              return (
                <li
                  key={`${item}${index}`}
                  className={index === showImg ? 'show bar' : 'bar'}
                />
              )
            })}
          </ul>
          <div
            className={showToggle ? 'next-container show' : 'next-container'}
            onClick={this.bannerNext}
          >
            <i className='icon-arrow-right2' />
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.timedScrollImage()
  }

  bannerNext() {
    this.setState((state, props) => {
      if (state.showImg + 1 === props.imgList.length) {
        return { showImg: 0 }
      }
      const showImg = state.showImg + 1
      return { showImg }
    })
  }

  bannerPre() {
    this.setState((state, props) => {
      if (state.showImg === 0) {
        return { showImg: props.imgList.length - 1 }
      }
      const showImg = state.showImg - 1
      return { showImg }
    })
  }

  onMouseOverBanner() {
    clearInterval(this.state.timer)
    this.setState({
      showToggle: true
    })
  }

  onMouseOutBanner() {
    this.timedScrollImage()
    this.setState({
      showToggle: false
    })
  }

  timedScrollImage() {
    const timer = setInterval(() => {
      this.setState((preState, props) => {
        if (preState.showImg + 1 >= props.imgList.length) {
          return {
            showImg: 0
          }
        }
        let showImg = preState.showImg
        showImg++
        return { showImg }
      })
    }, this.props.rollingTime)
    this.setState({
      timer
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }
}
