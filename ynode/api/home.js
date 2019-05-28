import axios from '../common/js/axios'

export function topics(tab = '', page = 1, limit = 40) {
  console.log('请求')
  return axios.get('https://cnodejs.org/api/v1/topics', {
    tab,
    page,
    limit
  }).then(res => {
    return Promise.resolve(res.data)
  })
}