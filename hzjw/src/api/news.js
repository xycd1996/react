import axios from 'axios'

export function getSite(code) {
  return axios({
    method: 'get',
    url: '/hzjwztc/api/news/site.action',
    params: {
      code: code
    }
  })
    .then(res => {
      return Promise.resolve(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export function getNews(cate, page = 1, psize = 15) {
  return axios({
    method: 'get',
    url: '/hzjwztc/api/news/list.action',
    params: {
      code: cate,
      page: page,
      psize: psize
    }
  })
    .then(res => {
      return Promise.resolve(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export function getDetail(code, type = 1) {
  return axios({
    method: 'get',
    url: '/hzjwztc/api/news/detail.action',
    params: {
      code: code,
      type: type
    }
  })
    .then(res => {
      return Promise.resolve(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}
