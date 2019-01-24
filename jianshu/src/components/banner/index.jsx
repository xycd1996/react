import React, { Component } from 'react'

import './style.sass'

export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showImg: props.imgList[0]
    }
  }

  render() {
    const { imgList } = this.props
    const { showImg } = this.state
    return (
      <div className='banner'>
        <div className='container'>
          <img className='image' src={showImg} />
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
    this.ChangeImg()
  }

  ChangeImg() {
    const { rollingTime, imgList } = this.props
    let index = 1
    let clearTimer = setInterval(() => {
      this.setState({
        showImg: imgList[index]
      })
      if (index + 1 >= imgList.length) {
        index = 0
        return
      }
      index++
    }, rollingTime)
    this.setState({
      clearTimer
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.clearTimer)
  }
}
