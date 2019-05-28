import React, { Component } from 'react'
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'

export default class Scroll extends Component {
  static propTypes = {
    click: PropTypes.bool,
    onLoad: PropTypes.func,
    bounce: PropTypes.bool
  }

  static defaultProps = {
    click: true,
    onLoad: () => {
      return
    },
    bounce: true
  }

  constructor(props) {
    super(props)
    this.state = {}
    this.wrapper = React.createRef()
  }

  render() {
    return (
      <div
        className='wrapper'
        style={{ height: '100vh', overflow: 'hidden' }}
        ref={this.wrapper}
      >
        <div>{this.props.children}</div>
      </div>
    )
  }

  componentDidMount() {
    this._initScroll()
  }
  _initScroll() {
    if (!this.wrapper.current && !this.props.children) {
      return
    }
    const { click, onLoad, bounce } = this.props
    this.scroll = new BScroll(this.wrapper.current, {
      click: click,
      probeType: 3,
      bounce: bounce
    })
    this.scroll.on('scroll', pos => {
      // console.log(pos)
      onLoad(pos)
    })
  }

  refresh() {
    this.scroll && this.scroll.refresh()
  }

  scrollTo() {
    this.scroll.scrollTo(0, 0, 1000)
  }

  componentWillReceiveProps() {
    this.clearTime = setTimeout(() => {
      this.refresh()
    }, 500)
  }

  destroy() {
    this.scroll && this.scroll.destroy()
  }

  componentWillUnmount() {
    this.destroy()
    clearTimeout(this.clearTime)
  }
}
