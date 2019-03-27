import React, { Component } from 'react'
import { Toast } from 'antd-mobile'
import { getSite, getNews } from '../../../api/news'
import Tags from '../../../components/app/tags/tags'
import NewsList1 from '../../../components/app/news-list-1/news-list-1'
import NewsList2 from '../../../components/app/news-list-2/news-list-2'
import Loading from '../../../components/app/loading/loading'
import Scroll from '../../../components/app/scroll/scroll'
import BackTop from '../../../components/app/back-top/back-top'
import { HashRouter as Router, Route } from 'react-router-dom'
import newsDetail from '../../../components/app/news-detail/news-detail'

const P_SIZE = 15

export default class NewsTemplate1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cate: '',
      tagsData: null,
      newsList: [],
      page: 1,
      requesting: true // 上拉请求阀门，为true时进行数据请求，为false则拒绝请求，防止上拉多次发起请求时间
    }
    this.scrollDom = React.createRef()
    this.onLoad = this.onLoad.bind(this)
    this.changeNews = this.changeNews.bind(this)
    this.backTop = this.backTop.bind(this)
    this.showDetail = this.showDetail.bind(this)
  }

  render() {
    const { tagsData, newsList } = this.state
    const { match } = this.props
    return (
      <div className='news-template-1'>
        <Scroll ref={this.scrollDom} onLoad={this.onLoad}>
          {tagsData ? (
            <Tags changeNews={this.changeNews} tags={tagsData} />
          ) : null}
          {newsList.length ? (
            // newsList[0].sex ? (
            //   '333'
            // ) : newsList[0].itemType ? (
            //   '123'
            // ) : (
            <NewsList1 showDetail={this.showDetail} newsList={newsList} />
          ) : (
            <Loading />
          )}
        </Scroll>
        <BackTop backTop={this.backTop} />
        <Router>
          <Route path={`${match.url}/:id`} component={newsDetail} />
        </Router>
      </div>
    )
  }

  componentDidMount() {
    const code = this.props.match.params.id
    this.getSite(code)
  }

  backTop() {
    this.scrollDom.current.scrollTo()
  }

  async getSite(code) {
    const res = await getSite(code)
    if (res.code === 200) {
      this.setState({
        tagsData: res.data.details
      })
      const cate = this.state.tagsData[0].cate
      this.getNews(cate)
      return
    }
    Toast.fail('数据加载失败!!!', 1)
  }

  getNews(cate, page) {
    if (!this.state.requesting) {
      return
    }
    this.setState({
      requesting: false
    })
    getNews(cate, page, P_SIZE).then(res => {
      if (res.code === 200) {
        const newsList = res.data.data
        const total = res.data.total
        if (cate !== this.state.cate) {
          const page = 2
          this.setState({
            newsList,
            page,
            requesting: true,
            total,
            cate
          })
          return
        }
        this.setState(pre => {
          const page = pre.page + 1
          return {
            newsList: [...pre.newsList, ...newsList],
            page,
            requesting: true,
            total,
            cate
          }
        })
      }
    })
  }

  changeNews(cate) {
    // 防止重复点击时重复请求数据
    if (cate === this.state.cate || !this.state.requesting) {
      return
    }
    this.getNews(cate)
  }

  onLoad(pox) {
    if (!this.state.requesting) {
      return
    }
    let contentHeight = this.scrollDom.current.scroll.scrollerHeight
    let contentClientHeight = this.scrollDom.current.scroll.wrapperHeight
    let sum = contentHeight + pox.y - contentClientHeight
    if (parseInt(sum) < 100 && parseInt(sum) > 0) {
      const cate = this.state.cate
      const end = Math.ceil(this.state.total / P_SIZE)
      if (this.state.page < end) {
        this.getNews(cate, this.state.page)
      } else {
        Toast.fail('已加载全部数据！', 1)
        this.setState({
          requesting: true
        })
      }
    }
  }

  showDetail(code) {
    const { match } = this.props
    this.props.history.push(`${match.url}/${code}`)
  }
}
