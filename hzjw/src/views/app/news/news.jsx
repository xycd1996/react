import React, { Component } from 'react'
import { Toast } from 'antd-mobile'
import { getSite, getNews } from '@api/news'
import Tags from '@components/app/tags/tags'
import NewsList from '@components/app/news-list/news-list'
import FormList from '@components/app/form-list/form-list'
import Loading from '@components/app/loading/loading'
import Scroll from '@components/app/scroll/scroll'
import BackTop from '@components/app/back-top/back-top'
import { HashRouter as Router, Route } from 'react-router-dom'
import NewsDetail from '@components/app/news-detail/news-detail'
import FormDetail from '@components/app/form-detail/form-detail'
import { searchCode } from '@common/js/searchNewsCode'

const P_SIZE = 15

export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cate: '',
      tagsData: null,
      listData: [],
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
    const { tagsData, listData } = this.state
    const { match } = this.props
    return (
      <div className="news-template-1">
        <Scroll ref={this.scrollDom} onLoad={this.onLoad}>
          {tagsData ? (
            <Tags changeNews={this.changeNews} tags={tagsData} />
          ) : null}
          {listData.length ? (
            searchCode(this.props.match.params.id) === 1 ? (
              <NewsList showDetail={this.showDetail} listData={listData} />
            ) : (
              <FormList showDetail={this.showDetail} listData={listData} />
            )
          ) : (
            <Loading />
          )}
        </Scroll>
        <BackTop backTop={this.backTop} />
        <Router>
          <Route
            path={`${match.url}/:id`}
            component={
              searchCode(this.props.match.params.id) === 1
                ? NewsDetail
                : FormDetail
            }
          />
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
        const listData = res.data.data
        const total = res.data.total
        if (cate !== this.state.cate) {
          const page = 2
          this.setState({
            listData,
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
            listData: [...pre.listData, ...listData],
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
    if (parseInt(sum) < 20 && parseInt(sum) > 0) {
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

  showDetail(code, img) {
    const { match } = this.props
    const type = searchCode(match.params.id)
    sessionStorage.setItem('image', img)
    sessionStorage.setItem('type', type)
    console.log(type)
    this.props.history.push(`${match.url}/${code}`)
  }
}
