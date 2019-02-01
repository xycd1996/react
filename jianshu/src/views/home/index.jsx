import React, { Component } from 'react'
import Header from '../../components/header'
import Banner from '../../components/banner'
import ArticleList from '../../components/article-list'
import MoreButton from '../../components/more-btn'
import TopList from '../../components/top-list'
import Recommend from '../../components/recommend'
import { getAuthorList, bannerList } from '../../api/recommend'

import './style.sass'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgList: [],
      articleList: [
        {
          title: '身边冷知识：天天玩QQ，但你知道登录界面这俩人是谁吗？',
          description:
            'QQ是很多人日常聊天使用的工具，虽然大家都是保持登录状态一点开就上线的，但是它的登录页面我们还是见过的。不知道你有没有过这样一个疑惑，那就是QQ...',
          author: '于志佐',
          comment: 182,
          like: 31,
          img: require('../../static/images/test.jpg')
        },
        {
          title: '身边冷知识：天天玩QQ，但你知道登录界面这俩人是谁吗？',
          description:
            'QQ是很多人日常聊天使用的工具，虽然大家都是保持登录状态一点开就上线的，但是它的登录页面我们还是见过的。不知道你有没有过这样一个疑惑，那就是QQ...',
          author: '于志佐',
          comment: 182,
          like: 31
        },
        {
          title: '身边冷知识：天天玩QQ，但你知道登录界面这俩人是谁吗？',
          description:
            'QQ是很多人日常聊天使用的工具，虽然大家都是保持登录状态一点开就上线的，但是它的登录页面我们还是见过的。不知道你有没有过这样一个疑惑，那就是QQ...',
          author: '于志佐',
          comment: 182,
          like: 31
        },
        {
          title: '身边冷知识：天天玩QQ，但你知道登录界面这俩人是谁吗？',
          description:
            'QQ是很多人日常聊天使用的工具，虽然大家都是保持登录状态一点开就上线的，但是它的登录页面我们还是见过的。不知道你有没有过这样一个疑惑，那就是QQ...',
          author: '于志佐',
          comment: 182,
          like: 31
        }
      ],
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
    this.getBannerList()
    this.getAuthorList()
  }

  getBannerList() {
    bannerList().then(res => {
      this.setState({
        imgList: res
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
