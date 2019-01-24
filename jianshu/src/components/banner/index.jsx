import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import './style.sass'

export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showImg: 0,
      test: false
    }
  }

  render() {
    const { imgList, width, height } = this.props
    const { showImg } = this.state
    return (
      <div className='banner'>
        <div className='container'>
          <ul>
            {imgList.map((item, index) => {
              return (
                <CSSTransition
                  in={index === showImg ? true : false}
                  classNames='banner'
                  timeout={500}
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
          <ul>
            {imgList.map((item, index) => {
              return (
                <li key={`${item}${index}`}>
                  <i className='icon-minus' />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.timedScrollImage()
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
