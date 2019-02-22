import React, { Component } from 'react'
import Header from '../../components/header'
import Banner from '../../components/banner'
import ArticleList from '../../components/article-list'
import MoreButton from '../../components/more-btn'
import TopList from '../../components/top-list'
import Recommend from '../../components/recommend'
import { getAuthorList, getRecommend } from '../../api/recommend'
import { bannerSpider, contentSpider } from '../../spider/recommend'

import './style.sass'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgList: [],
      articleList: [],
      rollingTime: 3000,
      show: true,
      recommendAuthor: {},
      seen_ids: ''
    }
    this.changeAuthorList = this.changeAuthorList.bind(this)
  }

  render() {
    return (
      <div className='home'>
        <Header />
        <div className='content-container'>
          <div className='content-left'>
            {this.state.imgList.length ? (
              <Banner
                imgList={this.state.imgList}
                rollingTime={this.state.rollingTime}
              />
            ) : null}
            <ArticleList articleList={this.state.articleList} />
            <div className='button'>
              <MoreButton buttonName='阅读更多' />
            </div>
          </div>
          <div className='content-right'>
            <div className='topic'>
              <TopList />
            </div>
            <div className='recommend-author'>
              {this.state.recommendAuthor['users'] ? (
                <Recommend
                  author={this.state.recommendAuthor}
                  changeAuthorList={this.changeAuthorList}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.getRecommend()
    this.getAuthorList()
  }

  getRecommend() {
    getRecommend().then(res => {
      const imgList = bannerSpider(res)
      const articleList = contentSpider(res)
      this.setState({
        imgList,
        articleList
      })
    })
  }

  getAuthorList() {
    getAuthorList().then(res => {
      let seen_ids = []
      res.users.forEach(item => {
        seen_ids.push(item.id)
      })
      this.setState({
        recommendAuthor: res,
        seen_ids
      })
    })
  }

  changeAuthorList() {
    getAuthorList(this.state.seen_ids.join(',')).then(res => {
      this.setState(state => {
        let seen_ids = []
        res.users.forEach(item => {
          seen_ids.push(item.id)
        })
        return { recommendAuthor: res, seen_ids: [...state.seen_ids, seen_ids] }
      })
    })
  }
}
