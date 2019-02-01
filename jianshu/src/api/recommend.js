import axios from 'axios'
import { bannerSpider } from '../spider/recommend'

export function bannerList() {
  return axios({
    method: 'get',
    url: '/api'
  }).then(res => {
    let data = bannerSpider(res.data)
    return Promise.resolve(data)
  })
}

export function getAuthorList(
  seen_ids = '',
  count = 5,
  only_unfollowed = true
) {
  return axios({
    method: 'get',
    url: '/api/users/recommended',
    params: {
      seen_ids: seen_ids,
      count: count,
      only_unfollowed: only_unfollowed
    },
    headers: {
      Accept: 'application/json'
    }
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getArticleList() {
  return axios({
    method: 'get',
    url: '/api',
    params: {}
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
