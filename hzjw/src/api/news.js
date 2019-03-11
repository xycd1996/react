import axios from 'axios'

export function getSite(code) {
  return axios({
    method: 'get',
    url: '/hzjwztc/api/news/site.action',
    params: {
      code: code
    }
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
